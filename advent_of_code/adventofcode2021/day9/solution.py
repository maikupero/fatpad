####################################################################
# Managing input data stuff
####################################################################
def read_input(filename):
	grid = []
	with open(filename, "r") as file:
		for line in file.readlines():
			grid.append(list(int(num) for num in line.strip()))
	return grid

def check_adjacent(y,x):
	if x > 0:
		if cave[y][x-1] <= cave[y][x]:
			return False
	if y > 0:
		if cave[y-1][x] <= cave[y][x]:
			return False
	if x < width-1:
		if cave[y][x+1] <= cave[y][x]:
			return False
	if y < height-1:
		if cave[y+1][x] <= cave[y][x]:
			return False
	return True

def findsize(basin):
	if (basin[0] < 0) or (basin[1] < 0) or (basin[0] == height) or (basin[1] == width):
		return 0
	if cave[basin[0]][basin[1]] == 9: 
		return 0
	size = 1
	cave[basin[0]][basin[1]] = 9
	size += findsize([basin[0],basin[1]-1])
	size += findsize([basin[0]-1,basin[1]])
	size += findsize([basin[0],basin[1]+1])
	size += findsize([basin[0]+1,basin[1]])
	print(f"size: {size}.")
	return size

def part1():
	risk_level = 0
	for y in range(height):
		for x in range(width):
			if check_adjacent(y,x):
				# print(f"Found lowpoint at [{y},{x}] {cave[y][x]}")
				risk_level += cave[y][x] + 1
				# print(f"Risk Level at: {risk_level}")
	return risk_level

def part2():
	basins = []
	for y in range(height):
		for x in range(width):
			if check_adjacent(y,x):
				basins.append([y,x])
	
	basinsizes = []
	for basin in basins:
		print(f"Basin located at {basin} is ", end="")
		basinsizes.append(findsize(basin))

	topthree = []
	for i in range(3):
		topthree.append(basinsizes.pop(basinsizes.index(max(basinsizes))))
	return topthree[0] * topthree[1] * topthree[2]

if __name__ == "__main__":
	cave = read_input("input.txt")
	height = len(cave)
	width = len(cave[0])
	print(f"Part 1: {part1()}, Part 2: {part2()}")