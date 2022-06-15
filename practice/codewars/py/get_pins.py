# -------------------------------------------------------------------------------
# --------------------------- Enlightening solutions ----------------------------
# -------------------------------------------------------------------------------



# -------------------------------------------------------------------------------
# -------------------------------- My solution ----------------------------------
# -------------------------------------------------------------------------------
# Nice and clean
def get_pins(observed):
    keypad = {
        "1": ['1','2','4'],
        "2": ['1','2','3','5'],
        "3": ['2','3','6'],
        "4": ['1','4','5','7'],
        "5": ['2','4','5','6','8'],
        "6": ['3','5','6','9'],
        "7": ['4','7','8'],
        "8": ['5','7','8','9','0'],
        "9": ['6','8','9'],
        "0": ['8','0']
    }
    all_combinations = ['']
    for i in range(len(observed)):
        hold = list()
        current = keypad[observed[i]]
        for digit in current:
            for string in all_combinations:
                new = string + digit
                hold.append(new)
        all_combinations = hold

    return all_combinations



# Brute force attempt
#     all_combinations = list()
#     ranges = get_range(observed)
#     print(ranges)
#     for i in range(ranges[0],ranges[1]):
#         # convert i to string. 
#         # look up each digit on the keypad to check if valid based on observed.
#         # if all valid append to all_combinations. isn't that it?

# def get_range(observed):
#     rangemax = "1"
#     for i in range(len(observed)):
#         rangemax += "0"
#     rangemin = "0" if rangemax == "10" else rangemax[:-1]
#     return (int(rangemin), int(rangemax))




# First attempt (FAILURE):
# def get_pins(observed):
#     buffered_keypad = [
#         ["a","a","a","a","a"],
#         ["a","1","2","3","a"],
#         ["a","4","5","6","a"],
#         ["a","7","8","9","a"],
#         ["a","a","0","a","a"]
#     ]
#     possible = list()

#     for digit in observed:
#         # Get the location of our current digit
#         for y in range(5):
#             for x in range(5):
#                 if buffered_keypad[y][x] == digit:
#                     coords = (y,x)

#         # note all its neighbors
#         neighbors = list()
#         if buffered_keypad[coords[0]-1][coords[1]] != "a":
#             neighbors.append(buffered_keypad[coords[0]-1][coords[1]])
#         if buffered_keypad[coords[0]][coords[1]-1] != "a":
#             neighbors.append(buffered_keypad[coords[0]][coords[1]-1])
#         neighbors.append(buffered_keypad[coords[0]][coords[1]])
#         if buffered_keypad[coords[0]][coords[1]+1] != "a":
#             neighbors.append(buffered_keypad[coords[0]][coords[1]+1])
#         if buffered_keypad[coords[0]+1][coords[1]] != "a":
#             neighbors.append(buffered_keypad[coords[0]+1][coords[1]])

#         possible.append(neighbors)

#     # for digit in possible:
#     print(possible)
#     final_results = possible[0]
#     for x in range(len(possible)):
#         for digit in final_results:
#             digit += 
#     else:
#         for x in range(len(possible)):
#             for digit in possible[x]:

#     elif len(possible) == 2:
#         # For every first press
#         # For length of pin code (number of presses)
#         for i in possible[0]:
#             for j in possible[1]:
#                 if (i+j) not in final_results:
#                     final_results.append(i+j)
#         return final_results
#     elif len(possible) == 3:
#         for i in possible[0]:
#             for j in possible[1]:
#                 for k in possible[2]:
#                     if (i+j+k) not in final_results:
#                         final_results.append(i+j+k)
#         return final_results
#     elif len(possible) == 4:
#         for i in possible[0]:
#             for j in possible[1]:
#                 for k in possible[2]:
#                     for l in possible[3]:
#                         if (i+j+k+l) not in final_results:
#                             final_results.append(i+j+k+l)
#         return final_results
        
test = '8'
expected = ['5','7','8','9','0']
test2 = '11'
expected2 = ["11", "22", "44", "12", "21", "14", "41", "24", "42"]
test3 = '369'
expected3 = ["339","366","399","658","636","258","268","669","668","266","369","398","256","296","259","368","638","396","238","356","659","639","666","359","336","299","338","696","269","358","656","698","699","298","236","239"]
print(f"Tested: {get_pins(test)}\nExpect: {expected}")
print(f"Tested: {get_pins(test2)}\nExpect: {expected2}")
print(f"Tested: {get_pins(test3)}\nExpect: {expected3}")

# Alright, detective, one of our colleagues successfully observed our target person, Robby the robber. 
# We followed him to a secret warehouse, where we assume to find all the stolen stuff. 
# The door to this warehouse is secured by an electronic combination lock. 
# Unfortunately our spy isn't sure about the PIN he saw, when Robby entered it.
# The keypad has the following layout:
# ┌───┬───┬───┐
# │ 1 │ 2 │ 3 │
# ├───┼───┼───┤
# │ 4 │ 5 │ 6 │
# ├───┼───┼───┤
# │ 7 │ 8 │ 9 │
# └───┼───┼───┘
#     │ 0 │
#     └───┘
# He noted the PIN 1357, but he also said, it is possible that each of the digits he saw 
# could actually be another adjacent digit (horizontally or vertically, but not diagonally). 
# E.g. instead of the 1 it could also be the 2 or 4. 
# And instead of the 5 it could also be the 2, 4, 6 or 8.

# He also mentioned, he knows this kind of locks. You can enter an unlimited amount of wrong PINs, 
# they never finally lock the system or sound the alarm. 
# That's why we can try out all possible (*) variations.
# * possible in sense of: the observed PIN itself and all variations considering the adjacent digits

# Can you help us to find all those variations? 
# It would be nice to have a function, that returns an array (or a list in Java/Kotlin and C#) 
# of all variations for an observed PIN with a length of 1 to 8 digits. 
# We could name the function getPINs (get_pins in python, GetPINs in C#). 
# But please note that all PINs, the observed one and also the results, must be strings, 
# because of potentially leading '0's. We already prepared some test cases for you.
# Detective, we are counting on you!