# Array of numbers to be called
numbers = []
# Build array of 5x5(flattened to 25) boards of key-value pairs
boards = []
# Any board that wins will be added into here (by index).
winnerlist = []

# Create key value pairs at each value on our board
def bingoify(num):
    bingonum = {
        'number': int(num),
		'called': 0
		}
    return bingonum
    
with open('example.txt', 'r') as file:
    numbers = file.readline().rstrip().split(",")

    for line in file.readlines():
        if line != "\n":
            row = line.rstrip().split()
            for num in row:
                boards.append(bingoify(num))

# Make sure we're working with ints and not strings
for index, number in enumerate(numbers):
    numbers[index] = int(number)

# For clarity's sake
boardcount = len(boards) // 25
print(f"Playing with {boardcount} board(s).")

def callnumbers(winners):
    for number in numbers:
        for num in range(len(boards)):
            if boards[num]['number'] == number:
                boards[num]['called'] = 1
                if (checkwinner(winners)):
                    return getscore(winnerlist[-1], number)

def checkwinner(winners):
    # Check rows & columns for 5 in a row after every number is called.
    for board in range(boardcount):
        for column in range(5):
            countX = 0
            countY = 0
            for row in range(5):
                positionX = (board * 25) + row + (column * 5)
                positionY = (board * 25) + (row * 5) + column
                # Our row scanner
                if boards[positionX]['called'] == 1:
                    countX += 1    
                # Our column scanner
                if boards[positionY]['called'] == 1:
                    countY += 1
                if countX == 5 or countY == 5:
                    if board not in winnerlist:
                        winnerlist.append(board)
                    if len(winnerlist) == winners:
                        return True

def getscore(board, number):
    boardstart = board*25
    lastcalled = number
    unmarked = 0
    
    for num in range(boardstart, boardstart+25):
        if boards[num]['called'] == 0:
            unmarked += boards[num]['number']

    return unmarked * lastcalled

def part1():
    return callnumbers(1)

def part2():
	return callnumbers(len(boards)//25)

print(f'Part 1: {part1()}, Part 2: {part2()}')