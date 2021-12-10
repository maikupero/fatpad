####################################################################
# Managing input data stuff
####################################################################
cave = []

def read_input(filename):
	with open(filename, "r") as file:
		for line in file.readlines():
			print(line)
			line = line.split('')
####################################################################
# 
####################################################################

def part1():
	return 0

def part2():
	return 0

if __name__ == "__main__":
	read_input("example.txt")
	print(f"Part 1: {part1()}, Part 2: {part2()}")