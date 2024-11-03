from functools import cache
####################################################################
# Managing input data stuff
####################################################################
def read_input(filename):
	template = str()
	key = dict()
	with open(filename, "r") as file:
		template = file.readline().strip()
		file.readline()
		for line in file.readlines():
			line = line.strip().split(' -> ')
			key[f"{line[0]}"] = line[1]

	return (template, key)

def findelements(polymer):
	element_str = str()
	for i in range(len(polymer)-1):
		pair = polymer[i]+polymer[i+1]
		element_str += key[pair]
	return element_str

def insertion(original_string, append_string):
	new_string = str()
	for i in range(len(original_string)):
		new_string += original_string[i]
		if i < (len(append_string)):
			new_string += append_string[i]
	return new_string

def count(polymer):
	elements = []
	counts = []
	for element in polymer:
		if element not in elements:
			elements.append(element)
			counts.append(polymer.count(element))
	return (max(counts)) - (min(counts))

def part1(steps):
	polymer = template
	# print(f"Checking polymer: {polymer}, over {steps} steps.")
	for i in range(steps):
		# print(f"Step {i}:",end="")
		new_polymers = findelements(polymer)
		# print(f" To {polymer} inserting {new_polymers}, yields ",end="")
		polymer = insertion(polymer, new_polymers)
		# print(f"{polymer} of length {len(polymer)}")
	return count(polymer)

def followpair(pair, steps, counts):
	
def part2(steps):
	# Get our dict together to count later - count pairs!!
	pairs = list()
	counts = dict()
	for pair in key:
		if pair not in pairs:
			pairs.append(pair)
			counts[pair] = 0
	print(counts)

	# Break our template string into pairs - we only need to check the path of each of these.
	polymer = template
	for i in range(len(polymer)-1):
		follow_pair(polymer[i]+polymer[i+1], steps, counts)
		
	for step in range(steps):
		front = pair[0]+key[pair]
		counts[pair[0]+key[pair]] += 1
		counts[key[pair]+pair[1]] += 1
	print(counts)
	
	occurences = list()
	for element in counts:
		occurences.append(counts[element])
	return (max(occurences) - min(occurences))

if __name__ == "__main__":
	input = read_input("example.txt")
	template = input[0]
	key = input[1]
	print(f"Part 1: {part1(10)}")
	print(f"Part 2: {part2(10)}")