paths = list()
paths2 = list()

def read_input(filename):

    input = dict()

    with open(filename, 'r') as file:
        for line in file.readlines():
            
            data = line.strip().split('-')

            if input.get(data[0]):
                input[data[0]].add(data[1])
            else:
                input[data[0]] = set()
                input[data[0]].add(data[1])

            if input.get(data[1]):
                input[data[1]].add(data[0])
            else:
                input[data[1]] = set()
                input[data[1]].add(data[0])

    return input

def search(input:dict, traveled: list, location: str):
    global paths
    for value in input[location]:
        if value == "end":
            paths.append(traveled + ["end"])
        elif (value[0].islower() and value in traveled):
            continue
        else:
            search(input, traveled + [value], value)

            
def searchp2(input:dict, traveled: list, location: str, repeat: bool = None):

    if repeat == None:
        repeat = False
        
    global paths2
    for value in input[location]:
        if value == "end":
            paths2.append(traveled + ["end"])
        elif value == "start":
            continue
        elif (value[0].islower() and value in traveled):
            if repeat:
                continue
            else:
                searchp2(input, traveled + [value], value, True)
        else:
            searchp2(input, traveled + [value], value, repeat)

def part1(input:dict):
    search(input, ["start"], "start")

def part2(input:dict):
    searchp2(input, ["start"], "start")

if __name__ == "__main__":
    input = read_input("example1.txt")
    part1(input)
    print("Part 1:", len(paths))
    part2(input)
    print("Part 2:", len(paths2))