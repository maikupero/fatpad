####################################################################
# Managing input data stuff
####################################################################
def read_input(filename):
	lines = []
	with open(filename, "r") as file:
		for line in file.readlines():
			lines.append(line.strip())
	return lines

def checker(list_of_chars):
	key = {
		")": 3,
		"]": 57,
		"}": 1197,
		">": 25137
	}
	score = 0
	for char in list_of_chars:
		score += key[char]

	return score

def part1():
	corrupt_chars = []
	for line in lines:
		open = ""
		for character in line:
			if character in left:
				open += character
			if character in right:
				if character == ")" and open[-1] == "(":
					open = open[:-1]
				elif character == "}" and open[-1] == "{":
					open = open[:-1]
				elif character == "]" and open[-1] == "[":
					open = open[:-1]
				elif character == ">" and open[-1] == "<":
					open = open[:-1]
				else:
					corrupt_chars.append(character)
					corrupt.append(line)
					break
		if line not in corrupt:
			incomplete.append(line)

	return checker(corrupt_chars)

def incomplete_checker(remaining_chars):
	key = {
		"(": 1,
		"[": 2,
		"{": 3,
		"<": 4
	}
	score = 0
	for char in range(len(remaining_chars)-1, -1, -1):
		score *= 5
		score += key[remaining_chars[char]]

	return score

def part2():
	scores = []
	for line in incomplete:
		open = []
		for char in line:
			if char in left:
				open.append(char)
			if char in right:
				if char == ")" and open[-1] == "(":
					open.pop()
				elif char == "}" and open[-1] == "{":
					open.pop()
				elif char == "]" and open[-1] == "[":
					open.pop()
				elif char == ">" and open[-1] == "<":
					open.pop()
		scores.append(incomplete_checker(open))
	
	finalscores = sorted(scores)
	return finalscores[(len(finalscores)-1)//2]

if __name__ == "__main__":
	lines = read_input("input.txt")
	corrupt = []
	incomplete = []
	left = ("[","(","{","<")
	right = ("]",")","}",">")
	print(f"Part 1: {part1()}, Part 2: {part2()}")