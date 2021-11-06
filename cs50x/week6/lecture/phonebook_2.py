from cs50 import get_string

people = {
    "Brian": "+1-617-495-1000",
    "David": "+1-949-468-2750"
}

    # with dicts (associative arrays), [] square bracket notations work for looking up keys of any type.
    # also uses hash table to get as close to constant time as possible.

name = get_string("Name: ")
if name in people:
    print(f"Number: {people[name]}")

# if name in people:
#     number = people[name]
#     print(f"Number: {number}")