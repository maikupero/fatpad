# Managing input data stuff
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

# Part 1 stuff
def get_average(crabx):
	averagelist = []
	for x in crabx:
		averagelist.append(x['x'])

	return round(sum(averagelist) / len(averagelist))

def fuelcalc(i, crabx):
	fuelsum = 0
	for crab in crabx:
		fuelsum += abs(crab['x'] - i)

	return fuelsum

# Part 2 big boy stuff
def bigfuel(i, crabx):
	fuelsum = 0
	for crab in crabx:
		copy = crab.copy()
		if copy['x'] < i:
			increment = 1
		else: 
			increment = -1
		counter = 0
		while copy['x'] != i:
			copy['x'] += 1 * increment
			copy['fuel'] += 1 + counter
			counter += 1
		fuelsum += copy['fuel']
	
	return fuelsum
		

def part1(crabx):
	average = get_average(crabx)
	fuelcosts = []
	for i in range(average+1):
		fuelcosts.append(fuelcalc(i, crabx))

	return min(fuelcosts)

def part2(crabx):
	fuelcosts = []
	for i in range(len(crabx) + 1):
		fuelcosts.append(bigfuel(i, crabx))

	return min(fuelcosts)

if __name__ == "__main__":
	crabx = read_input("input.txt")
	print(f"Part 1: {part1(crabx)}, Part 2: {part2(crabx)}")