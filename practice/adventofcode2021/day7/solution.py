def submarine(xposition):
	crabsub = {
		"x": int(xposition),
		"fuel": 0
	}
	return crabsub

def read_input(filename):
	with open(filename, "r") as file:
		crabx = [submarine(crab) for crab in file.readline().split(",")]
	
	return crabx

def part1(crabx):
	for x in crabx:
		print(x)
	return 0

def part2(crabx):
	return 0

if __name__ == "__main__":
	crabx = read_input("example.txt")
	print(f"Part 1: {part1(crabx)}, Part 2: {part2(crabx)}")