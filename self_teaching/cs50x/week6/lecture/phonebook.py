import csv

from cs50 import get_string


with open("phonebook.csv", "a") as file:

    name = get_string("Name: ")
    number = get_string("Number: ")

    writer = csv.writer(file)

    writer.writerow([name, number])

    # More pythonic would be with "with"
# file = open("phonebook.csv", "a")

# name = get_string("Name: ")
# number = get_string("Number: ")

# writer = csv.writer(file)

# writer.writerow([name, number])

# file.close()