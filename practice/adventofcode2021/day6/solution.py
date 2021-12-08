from functools import cache

def read_input(filename):
	with open(filename, "r") as file:
		fishies = [int(fish) for fish in file.readline().split(",")]

	return fishies

# What I used to find solution for part 1 before realizing it's way too freaking slow for part 2.
def slowsim(days, fishies):
	population = fishies.copy()
	for day in range(1, days+1): 
		for fish in range(len(population)):
			if population[fish] == 0:
				population[fish] = 6
				population.append(8)
			else:
				population[fish] -= 1

	return len(population)

# VERY USEFUL FUNCTION TO JUDGE A SINGLE FISH'S FERTILITY
# def fish_babies(fish_age, days):
# 	return 1 + (days - fish_age) // 7

# FUNCTION TO COUNT BABIES FAST
@cache
def offspring(fish_age, days):
	if fish_age > days - 1:
		return 1
	return offspring(7, days - fish_age) + offspring(9, days - fish_age)

# Recursive Function to figure out how many babies this fish will have in the remaining days based on its starting age.
def fishlife(fishAge, days):
	babies = 1
	while days > fishAge:
		days -= fishAge
		fishAge = 7
		babies += fishlife(9, days)
	# print(f"returning babies! {babies}")
	return babies

def speedsim(days, fishies):
	population = fishies.copy()
	fishtown = 0
	for fish in population:
		print(f"fish {fish}")
		fishtown += offspring(fish, days)
		print(f"   brought fishtown to {fishtown}.")
	return fishtown

def part1(fishies):
	return slowsim(18, fishies)

def part2(fishies):
	return speedsim(256, fishies)

if __name__ == "__main__":
	fishies = read_input("input.txt")
	print(f"Part 1: {part1(fishies)}, Part 2: {part2(fishies)}")