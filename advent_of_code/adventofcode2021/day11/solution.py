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

# This increases the energy level of all adjacent octopuses by 1, including octopuses that are diagonally adjacent. 
# If this causes an octopus to have an energy level greater than 9, it also flashes. 
# This process continues as long as new octopuses keep having their energy level increased beyond 9. 
# (An octopus can only flash at most once per step.)
# Finally, any octopus that flashed during this step has its energy level set to 0, as it used all of its energy to flash.
def flash(row, octopus):
	rows[row][octopus] = 0
	for y in range(-1,2):
		if -1 < row + y < 10:
			for x in range(-1,2):
				if -1 < octopus + x < 10:
					if rows[row + y][octopus + x] > 0:
						rows[row + y][octopus + x] += 1
					if rows[row + y][octopus + x] > 9:
						flash(row+y, octopus+x, )

def part1(target):
	flashes = 0
	# print("Before any steps:")
	# for row in rows:
	# 	print(row)

	for step in range(target):
		# print(f"After step {step+1}, pre-flashing")

		# First, the energy level of each octopus increases by 1.
		for row in range(10):
			for octopus in range(10):
				rows[row][octopus] += 1
		# for row in rows:
			# print(row)

		# Then, any octopus with an energy level greater than 9 flashes. 
		# print(f"After step {step+1}, post-flashing")
		for row in range(10):
			for octopus in range(10):
				if rows[row][octopus] > 9:
					flash(row, octopus)

		# Check for how many flashes occured and add to total flash count.
		for row in range(10):
			for octopus in range(10):
				if rows[row][octopus] == 0:
					flashes += 1
		# for row in rows:
			# print(row)
	return flashes

def flashcopy(row, octopus):
	cavecopy[row][octopus] = 0
	for y in range(-1,2):
		if -1 < row + y < 10:
			for x in range(-1,2):
				if -1 < octopus + x < 10:
					if cavecopy[row + y][octopus + x] > 0:
						cavecopy[row + y][octopus + x] += 1
					if cavecopy[row + y][octopus + x] > 9:
						flashcopy(row+y, octopus+x)

def part2():
	step = 1
	while True:
		# First, the energy level of each octopus increases by 1.
		for row in range(10):
			for octopus in range(10):
				cavecopy[row][octopus] += 1

		# Then, any octopus with an energy level greater than 9 flashes. 
		for row in range(10):
			for octopus in range(10):
				if cavecopy[row][octopus] > 9:
					flashcopy(row, octopus)

		# Check for spontaneous simultaneous illumination.
		flashes = 0
		for row in range(10):
			for octopus in range(10):
				if cavecopy[row][octopus] == 0:
					flashes += 1
		if flashes == 100:
			return step
		else:
			step += 1

if __name__ == "__main__":
	rows = read_input("example.txt")
	cavecopy = read_input("input.txt")
	print(f"Part 1: {part1(100)}, Part 2: {part2()}")