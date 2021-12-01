# You may assume that the first row of the CSV file will be the column names. The first column will be the word name and the remaining columns will be the STR sequences themselves.
# Your program should open the DNA sequence and read its contents into memory.
# For each of the STRs (from the first line of the CSV file), your program should compute the longest run of consecutive repeats of the STR in the DNA sequence to identify.
# If the STR counts match exactly with any of the individuals in the CSV file, your program should print out the name of the matching individual.
# You may assume that the STR counts will not match more than one individual.
# If the STR counts do not match exactly with any of the individuals in the CSV file, your program should print "No match".
import sys
import csv


def main():
    # Ensure proper usage
    if len(sys.argv) != 3:
        sys.exit("Usage: python dna.py file.csv file.txt")
    # Require first command-line argument the name of a CSV file containing the STR counts for a list of individuals.
    if ".csv" not in sys.argv[1]:
        sys.exit("Usage: python dna.py || Include .csv file here || file.txt")
    # Require second command-line argument the name of a text file containing the DNA sequence to identify.
    if ".txt" not in sys.argv[2]:
        sys.exit("Usage: python dna.py file.csv || Include .txt file here ||")


# Start reading the csv file, build people dicts in a list.
    with open(sys.argv[1], "r") as file:
        headings = csv.reader(file)
        strlist = next(headings)

    people = []
    with open(sys.argv[1], "r") as file:
        reader = csv.DictReader(file)
        for row in reader:
            people.append(row)

    # Get our DNA sequence and save it as a string so we can parse through it.
    dna = ""
    with open(sys.argv[2], "r") as file:
        reader = csv.reader(file)
        for row in reader:
            for string in row:
                dna = string

    # For each (dict category) str that can repeat in our sequence, keep track of the highest count.
    for strcheck in range(1, len(strlist)):
        count = 0
        l = len(strlist[strcheck])
        for letter in range(len(dna) - len(strlist)):
            # Start count from this starting position if a match is found
            if (strlist[strcheck] == dna[letter:letter+l]):
                counter = 0
                # Increment by the string we're checking's length through the DNA string till it doesn't match.
                strstart = letter
                strend = letter + l
                while (strlist[strcheck] == dna[strstart:strend]):
                    counter += 1
                    strstart = strend
                    strend += l
                if count < counter:
                    count = counter
        strlist[strcheck] = {strlist[strcheck]: count}

    # Check each person against the str we just tallied from the sequence.
    for person in range(len(people)):
        # Against each of the str counts from our sequence
        count = 0
        for i in range(1, len(strlist)):
            for k, v in strlist[i].items():
                # print(f"Checking {people[person]['name']}:{people[person][k]} - {v}")
                if (v == int(people[person][k])):
                    count += 1
        # If match on every DNA str, we found the culprit.
        if (count == len(strlist) - 1):
            print(people[person]['name'])
            return people[person]['name']

    print("No match")


if __name__ == "__main__":
    main()