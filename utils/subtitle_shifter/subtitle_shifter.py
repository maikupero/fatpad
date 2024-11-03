import os
import sys

def shift(timestamp, shiftAmount):
  result = convertToSeconds(timestamp)
  result += shiftAmount
  result = convertSecondsToTimestamp(result)
  return result

def shiftTimestamps(line, shiftAmount):
  timestamps = line.split('-->')
  start = timestamps[0].rstrip().split(',')
  startMS = start[1]
  end = timestamps[1].rstrip().split(',')
  endMS = end[1]

  startShifted = shift(start[0], shiftAmount)
  endShifted = shift(end[0], shiftAmount)

  result = f"{startShifted},{startMS} --> {endShifted},{endMS}"
  # print(result)
  return result

def formatStamp(num):
  return f"0{str(num)}" if num < 10 else str(num)
    
def convertToSeconds(time):
  originalTime = time
  seconds = 0
  placeMultiplier = time.count(':')
  splitTime = time.split(':')
  for unit in splitTime:
    seconds += int(int(unit) * (60**placeMultiplier))
    placeMultiplier -= 1

  return seconds
    
def convertSecondsToTimestamp(totalSeconds):
  originalTotalSeconds = totalSeconds
  hours = 0
  minutes = 0
  seconds = 0

  seconds = totalSeconds % 60
  totalSeconds -= seconds
  
  minutes = totalSeconds // 60
  while minutes > 60:
    hours += 1
    minutes -= 60

  formattedHours = formatStamp(hours)
  formattedMinutes = formatStamp(minutes)
  formattedSeconds = formatStamp(seconds)

  result = f"{formattedHours}:{formattedMinutes}:{formattedSeconds}"
  return result

def shiftSubs():
  inputFile = input("Enter name of file (no input defaults to input.txt): ")
  if inputFile == "": inputFile = "./input.txt"
  print(inputFile)

  outputFile = input("Enter output file name: ")
  if outputFile == "": outputFile = "./output.sbt"
  print(outputFile)

  shiftAmount = int(input("Enter shift amount in seconds: "))

  lines = []

  with open(inputFile, 'r') as subs:
    for line in subs.readlines():
      # print(line)
      if '-->' in line:
        lines.append(shiftTimestamps(line, shiftAmount))
      else:
        lines.append(line.rstrip())

  for line in lines:
    print(line)

shiftSubs()
