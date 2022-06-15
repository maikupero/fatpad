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

# https://www.codewars.com/kata/525f50e3b73515a6db000b83