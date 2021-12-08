import re
coords = []
# Parse data into list of line segments (sets of start+finish coords) i.e. [[x1, y1][x2, y2]], [[x1, y1][x2, y2]]]
def read_input(filename):
	with open(filename, "r") as file:
		for line in file:
			segment = re.sub("[^0-9\s*\,*]", "", line)
			# Looks like 0,9  5,9
			segment = re.sub("[,]", " ", segment)
			segment = segment.strip().split(' ')
			# ['0', '9', '', '5', '9']
			segment.pop(2)
			# ['0', '9', '5', '9']
			segment = [int(coord) for coord in segment]
			# [0, 9, 5, 9]
			coords.append([])
			coords[-1].append(segment[0:2])
			coords[-1].append(segment[2:4])

	return coords

def checklines(coords):
	lines = []
	index = -1
	for start,finish in coords:
		index += 1	
		if (start[0] == finish[0]) or (start[1] == finish[1]):
			lines.append(coords[index])

	return lines

def plotcoords(linesegments):
	map = []
	for coordset in linesegments:
		# For horizontal lines (if the y's are equal)
		if coordset[0][1] == coordset[1][1]:
			# Distance between startpoint and finishpoint of each line segment
			traverse = abs(coordset[1][0] - coordset[0][0]) + 1
			start = min(coordset[1][0], coordset[0][0])
			for i in range(traverse):
				map.append([start + i, coordset[0][1]])
		# For vertical lines (if the x's are equal)
		elif coordset[0][0] == coordset[1][0]:
			# Distance between startpoint and finishpoint of each line segment
			traverse = abs(coordset[1][1] - coordset[0][1]) + 1
			start = min(coordset[1][1], coordset[0][1])
			for i in range(traverse):
				map.append([coordset[0][0], start + i])
		# For diagonal lines (if neither x's nor y's are equal)
		else:
			traverse = abs(coordset[1][1] - coordset[0][1]) + 1
			# Set x to x1 and set y to y1
			startx = coordset[0][0]
			starty = coordset[0][1]
			# If x2 > x1 / y2 > y1, increment positively, else negatively.
			incrX = 1 if coordset[1][0] - coordset[0][0] > 0 else -1
			incrY = 1 if coordset[1][1] - coordset[0][1] > 0 else -1
			for i in range(traverse):
				map.append([startx + i*incrX, starty + i*incrY])

	return map

def safestpath(map):	
	hold = []
	avoid = []
	for point in map:
		if (point in hold) and (point not in avoid):
			avoid.append(point)
		elif (point not in hold):
			hold.append(point)

	return len(avoid)

def part1(coords):
	horiverti = checklines(coords)
	map = plotcoords(horiverti)
	
	return safestpath(map)

def part2(coords):
	map = plotcoords(coords)
	
	return safestpath(map)

if __name__ == "__main__":
	read_input("input.txt")
	print(f"Part 1: {part1(coords)}, Part 2: {part2(coords)}")