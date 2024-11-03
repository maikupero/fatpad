####################################################################
# Managing input data stuff
####################################################################
def read_input(filename):
	caves = dict()
	with open(filename, "r") as file:
		for line in file.readlines():
			line = line.strip().split('-')
			for location in line:
				if location not in caves:
					caves[f'{location}'] = []
			caves[f'{line[0]}'].append(line[1])
			caves[f'{line[1]}'].append(line[0])
		caves.pop('end')
	return caves

# Find the number of distinct caves that go start -> end, and don't visit small caves more than once. 
# Big caves (uppercase, like A) and small caves (lowercase, like b). 
# All paths you find should visit small caves at most once, and can visit big caves any number of times.
def findpath(caves: dict, history: list, location: str, paths: list):
	for cave in caves[location]:
		#Breakpoint
		if cave == "end":
			print(history)
			paths.append(history)
		#To not repeat small caves
		elif (cave[0].islower() and cave in history):
			continue
		else:
			findpath(caves, history + [cave], cave, paths)
	return len(paths)

def part1():
	print(caves)
	paths = list()
	paths_count = findpath(caves, ["start"], "start", paths)
	return paths_count

def findpath2(caves: dict, history: list, location: str, paths: list, repeat: bool = None):
	if repeat == None:
		repeat = False

	for cave in caves[location]:
		#Breakpoint
		if cave == "end":
			print(history)
			paths.append(history)
		#To not repeat small caves more than once (except start)
		elif (cave == 'start' and cave in history):
			continue
		elif (cave[0].islower() and cave in history):
			if repeat:
				continue
			else:
				findpath2(caves, history + [cave], cave, paths, True)
		else:
			findpath2(caves, history + [cave], cave, paths, repeat)
	return len(paths)

def part2():
	print(caves)
	paths = list()
	paths_count = findpath2(caves, ["start"], "start", paths)
	return paths_count
	return 0

if __name__ == "__main__":
	caves = read_input("input.txt")
	cavescopy = caves.copy()
	print(f"Part 1: {part1()}, Part 2: {part2()}")