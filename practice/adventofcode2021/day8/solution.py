####################################################################
# Managing input data stuff
####################################################################
entries = []

def buildentry(segments):
	entry = {
		"key": {
			"0": "",
			"1": "",
			"2": "",
			"3": "",
			"4": "",
			"5": "",
			"6": "",
			"7": "",
			"8": "",
			"9": ""
		},
		"signal_patterns": segments,
		"output": []
	}
	return entry

def read_input(filename):
	with open(filename, "r") as file:
		for line in file.readlines():
			entry = line.strip().split(' ')
			if len(entry) > 4:
				entry.pop(-1)
				newentry = buildentry(entry)
			else:
				newentry["output"] = entry
				entries.append(newentry)
####################################################################
# Deals with the easy stuff - 1,4,7,8 digits with unique numbers of segments 
####################################################################
def uniques(entry):
	for segment in entry['signal_patterns']:
		if len(segment) == 2:
			entry['key']['1'] = segment
		elif len(segment) == 4:
			entry['key']['4'] = segment
		elif len(segment) == 3:
			entry['key']['7'] = segment
		elif len(segment) == 7:
			entry['key']['8'] = segment

####################################################################
# Massive boy for part 2
####################################################################
def otherkeys(entry):
	# Build lists of five-segment figures and six-segment figures
	global fives 
	fives = []
	global sixes 
	sixes = []
	for segment in entry['signal_patterns']:
		if len(segment) == 5:
			fives.append(segment)
		elif len(segment) == 6:
			sixes.append(segment)

	buildsignal = {
		't': '',
		'tl': '',
		'tr': '',
		'm': '',
		'bl': '',
		'br': '',
		'b': '',
	}
	buildsignal['t'] = findunique(entry['key']['1'], entry['key']['7'])
	buildsignal['m'] = findmissing(fives, sixes)
	buildsignal['tl'] = findunique(entry['key']['1']+buildsignal['m'],entry['key']['4'])

	almost_nine = entry['key']['4']+buildsignal['t']
	#Can build nine with the middle key, and thus build six and zero too.
	sixes = ordersixes(sixes, buildsignal['m'], almost_nine)
	zero = sixes[0]
	six = sixes[1]
	nine = sixes[2]

	buildsignal['b'] = findunique(almost_nine, nine)
	buildsignal['bl'] = findunique(nine, entry['key']['8'])
	buildsignal['tr'] = findunique(six, entry['key']['8'])

	#Then to get the last segment (bottom right) build a backwards nine, compare against 8.
	backwardsnine = buildsignal['t']+buildsignal['tl']+buildsignal['tr']+buildsignal['m']+buildsignal['bl']+buildsignal['b']
	buildsignal['br'] = findunique(backwardsnine, entry['key']['8'])
	print(buildsignal)

	# Now with our signal built and all segments in place, we can build our numbers to get our output.
	entry['key']['0'] = zero
	entry['key']['2'] = buildsignal['t']+buildsignal['tr']+buildsignal['m']+buildsignal['bl']+buildsignal['b']
	entry['key']['3'] = entry['key']['7']+buildsignal['m']+buildsignal['b']
	entry['key']['5'] = buildsignal['t']+buildsignal['tl']+buildsignal['m']+buildsignal['br']+buildsignal['b']
	entry['key']['6'] = six
	entry['key']['9'] = nine
	print(entry['key'])

####################################################################
# Helper to get the top segment's letter
####################################################################
def findunique(str1, str2):
	for letter in str2:
		if letter not in str1:
			return letter

####################################################################
# Helper to get the middle segment (which gets top left segment from 4)
####################################################################
def findmissing(fives, sixes):
	for letter in 'abcdefg':
		# Find the missing letter in each segment in the six length segments
		counter = 0
		for segment in sixes:
			if letter not in segment:
				counter += 1
		if counter == 1:
			for segment in fives:
				if letter not in segment:
					counter += 1
		if counter == 1:
			return letter

####################################################################
# 9 and 6 both share the middle segment, 0 does not. With that, we can find 9 and 6.
####################################################################
def ordersixes(sixes, middle_segment, almost_nine):
	zero = ''
	six = ''
	nine = ''
	for segment in range(len(sixes)):
		if middle_segment not in sixes[segment]:
			zero = sixes.pop(segment)
			break
	for segment in range(len(sixes)):
		for letter in almost_nine:
			if letter not in sixes[segment]:
				six = segment
				break
	six = sixes.pop(six)
	nine = sixes[0]
	
	return [zero, six, nine]

####################################################################
# Find output value with each complete key against each output
####################################################################
def getdigits(entry):
	outputstring = ''
	for output in entry['output']:
		match = ''
		print(f"Output: {output}")
		if len(output) == 2:
			match = '1'
		elif len(output) == 4:
			match = '4'
		elif len(output) == 3:
			match = '7'
		elif len(output) == 7:
			match = '8'
		elif len(output) == 5:
			for key in entry['key']:
				if len(entry['key'][key]) == 5:
					if sorted(output) == sorted(entry['key'][key]):
						match = key
		else:
			for key in entry['key']:
				if len(entry['key'][key]) == 6:
					if sorted(output) == sorted(entry['key'][key]):
						match = key

		print(f"Match: {match}")
		outputstring += match
		print(f"Outputstring: {outputstring}")

	return int(outputstring)

####################################################################
# For counting unique values in each entry for part 1.
####################################################################
def countmatches(entry):
	count = 0
	for output in entry['output']:
		for key in entry['key']:
			if len(entry['key'][key]) == len(output):
				count += 1
	
	return count
	
def part1(crabx):
	# print("-----------------------------------Our Starting dict--------------------------------------")
	# print(f"Key: {entries[0]['key']}")
	# print(f"Patterns: {entries[0]['signal_patterns']}")
	# print(f"Output: {entries[0]['output']}")
	# print("---------------------------Fill key with unique segments-----------------------------------")
	for entry in entries:
		uniques(entry)
	# print("--------------------------Count matches with unique keys-----------------------------------")
	count = 0
	for entry in entries:
		count += countmatches(entry)

	return count

def part2(entries):
	outputvalues = 0
	for entry in entries:
		print("-----------------------------------Our Starting dict--------------------------------------")
		print(f"Key: {entry['key']}")
		print(f"Patterns: {entry['signal_patterns']}")
		print(f"Output: {entry['output']}")
		print("---------------------------------Deduce the remaining keys--------------------------------")
		otherkeys(entry)
		print("----------------------------------Match against outputs-----------------------------------")
		outputvalues += getdigits(entry)
	return outputvalues

if __name__ == "__main__":
	read_input("input.txt")
	print(f"Part 1: {part1(entries)}, Part 2: {part2(entries)}")