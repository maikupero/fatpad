# -------------------------------------------------------------------------------
# --------------------------- Enlightening solutions ----------------------------
# -------------------------------------------------------------------------------

def formatted_number(n):
    return "({}{}{}) {}{}{}-{}{}{}{}".format(*n)

# -------------------------------------------------------------------------------
# -------------------------------- My solution ----------------------------------
# -------------------------------------------------------------------------------

def create_phone_number(n):
    number = "("
    for i in range(3):
        number += str(n[i])
    number += ") "
    for i in range(3,6):
        number += str(n[i])
    number += "-"
    for i in range(6,10):
        number += str(n[i])
    
    return number

test = create_phone_number([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
expect = "(123) 456-7890"
print(f"Tested: {test}\nExpect: {expect}")

# Write a function that accepts an array of 10 integers (between 0 and 9), 
# that returns a string of those numbers in the form of a phone number.

# Example
# create_phone_number([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) # => returns "(123) 456-7890"
# The returned format must be correct in order to complete this challenge.
# Don't forget the space after the closing parentheses!