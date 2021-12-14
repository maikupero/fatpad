####################################################################
# Managing input data stuff
####################################################################
def read_input(filename):
	rows = []
	with open(filename, "r") as file:
		for line in file.readlines():
			rows.append([])
			line = line.strip()
			for octopus in line:
				rows[-1].append(int(octopus))
	return rows

def part1(target):
	flashes = 0
	
	print("Before any steps:")
	for row in rows:
		print(row)

	for step in range(target):
		print(f"After step {step+1}")
		# First, the energy level of each octopus increases by 1.
		for row in range(len(rows)):
			print(row)
			for octopus in rows[row]:
				octopus += 1
		# Then, any octopus with an energy level greater than 9 flashes. 
		# This increases the energy level of all adjacent octopuses by 1, including octopuses that are diagonally adjacent. 
		# If this causes an octopus to have an energy level greater than 9, it also flashes. 
		# This process continues as long as new octopuses keep having their energy level increased beyond 9. 
		# (An octopus can only flash at most once per step.)
		# Finally, any octopus that flashed during this step has its energy level set to 0, as it used all of its energy to flash.
		for row in rows:
			print(row)

	return flashes

def part2():
	return 0

if __name__ == "__main__":
	rows = read_input("input.txt")
	print(f"Part 1: {part1(1)}, Part 2: {part2()}")