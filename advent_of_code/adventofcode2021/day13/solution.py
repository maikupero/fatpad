####################################################################
# Managing input data stuff
####################################################################
def read_input(filename):
	coords = list()
	folds = list()
	with open(filename, "r") as file:
		for line in file.readlines():
			if line != "\n":
				if "," in line:
					coords.append(list(int(num) for num in line.strip().split(',')))
				elif line[0] == "f":
					line = line.strip().split(' ')
					line = line[2].split('=')
					line[1] = int(line[1])
					folds.append((line[0],line[1]))
	return (coords, folds)

def fold(axis, amount, coords):
	if axis == "y":
		xy = 1
	else:
		xy = 0
	for coord in coords:
		if coord[xy] > amount:
			coord[xy] = amount - (coord[xy] - amount)

def part1():
	fold(folds[0][0], folds[0][1], coords)
	finish = []
	for coord in coords:
		if coord not in finish:
			finish.append(coord)
	return len(finish)

def part2():
	for instruction in folds:
		fold(instruction[0], instruction[1], coords2)
	finish = []
	for coord in coords:
		if coord not in finish:
			finish.append(coord)
	print(sorted(finish))
	for y in range(6):
		for x in range(40):
			if [x,y] in finish:
				print("# ",end="")
			else:
				print(". ",end="")
		print("\n")
	return len(finish)

if __name__ == "__main__":
	origami = read_input("input.txt")
	coords = origami[0]
	coords2 = origami[0].copy()
	folds = origami[1]
	print(f"Part 1: {part1()}, Part 2: {part2()}")