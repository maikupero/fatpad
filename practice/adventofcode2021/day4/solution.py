# Array of numbers to be called
numbers = []
# Build 5x5 board of key-value pairs, append to array of boards
board = []
boards = []

# Create key value pairs at each value in the row
def bingoify(row):
	bingorow = []
	for x in row:
		bingoval = {
		'number': x,
		'called': 0
		}
		bingorow.append(bingoval)
	return bingorow

with open('input.txt', 'r') as file:
	numbers = file.readline().rstrip().split(",")

	for line in file.readlines():
		if line != "\n":
			row = line.rstrip().split()
			board.append(bingoify(row))
			if len(board) == 5:
				boards.append(board)
				board = []

	# Prints out all our boards in 5x5 grids
	# for x in range(len(boards)):
	# 	print(f"Board {x}")
	# 	for y in range(5):
	# 		print(f"Row {y}: ", end='')
	# 		for val in range(5):
	# 			print(f"{boards[x][y][val]['number']}:{boards[x][y][val]['called']} ", end='')
	# 		print("\n")

def getscore(board, number):
	lastcalled = int(number) 
	unmarked = 0

	for row in range(5):
		for y in range(5):
			if boards[board][row][y]['called'] == 0:
				toscore = int(boards[board][row][y]['number'])
				unmarked += toscore
	return unmarked * lastcalled

def part1(numbers, boards):
	# Iterate through our list of numbers to be called, all matching numbers on each board's ['called'] get 1.
	for number in numbers:
		for board in boards:
			for row in board:
				for val in row:
					if number == val['number']:
						val['called'] = 1

		# Optional print statements to watch the game play out
		# for x in range(len(boards)):
		# 	print(f"Board {x}")
		# 	for y in range(5):
		# 		print(f"Row {y}: ", end='')
		# 		for val in range(5):
		# 			print(f"{boards[x][y][val]['number']}:{boards[x][y][val]['called']} ", end='')
		# 		print("\n")

		# Check rows & columns for 5 in a row after every number is called.
		for board in range(len(boards)):	
			for row in range(5):
				countX = 0
				countY = 0
				for column in range(5):
					# Our row scanner
					if boards[board][row][column]['called'] == 1:
						countX += 1
					# Our column scanner
					if boards[board][column][row]['called'] == 1:
						countY += 1
				if countX == 5 or countY == 5:
					print(f"We have a winner! Board#{board} with a score of: {getscore(board, number)}")
					return getscore(board, number)

def part2(numbers, boards):
	# Need to clear the boards first before going onto part 2
	# Of course we could've just done both of these in one part but, for consistent format's sake..
	for number in numbers:
		for board in boards:
			for row in board:
				for val in row:
					val['called'] = 0

	# Any board that wins will be added into here (by index).
	winnerlist = []

	# Iterate through our list of numbers to be called as in part 1.
	for number in numbers:
		for board in boards:
			for row in board:
				for val in row:
					if number == val['number']:
						val['called'] = 1

		# Optional print statements to watch the game play out
		# for x in range(len(boards)):
		# 	print(f"Board {x}")
		# 	for y in range(5):
		# 		print(f"Row {y}: ", end='')
		# 		for val in range(5):
		# 			print(f"{boards[x][y][val]['number']}:{boards[x][y][val]['called']} ", end='')
		# 		print("\n")

		# Check rows & columns for 5 in a row after every number is called.
		for board in range(len(boards)):
			for row in range(5):
				countX = 0
				countY = 0
				for column in range(5):
					# Our row scanner
					if boards[board][row][column]['called'] == 1:
						countX += 1
					# Our column scanner
					if boards[board][column][row]['called'] == 1:
						countY += 1
				if countX == 5 or countY == 5:
					if board not in winnerlist:
						print(f"Winner: Board#{board}, with a score of {getscore(board, number)} Get them out of here.")
						winnerlist.append(board)
						if len(boards) == len(winnerlist):
							print(f"We have a last winner! Thanks to Board#{board} for bringing it in with a score of {getscore(board, number)}")
							return getscore(board, number)
					break

print(f'Part 1: {part1(numbers, boards)}, Part 2: {part2(numbers, boards)}')