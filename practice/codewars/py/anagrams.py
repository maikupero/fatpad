# -------------------------------------------------------------------------------
# --------------------------- Enlightening solutions ----------------------------
# -------------------------------------------------------------------------------


# -------------------------------------------------------------------------------
# -------------------------------- My solution ----------------------------------
# -------------------------------------------------------------------------------
def get_next_iteration(current_iteration):
    for i, letter in enumerate(current_iteration):

def listPosition(word):
    count = 0
    original = word
    current = sorted(list(word))
    while current != original:
        current = get_next_iteration(current)
        count += 1
    return current

# Consider a "word" as any sequence of capital letters A-Z (not limited to just "dictionary words"). 
# For any word with at least two different letters, there are other words composed of the same letters but in a different order 
# (for instance, STATIONARILY/ANTIROYALIST, which happen to both be dictionary words; 
# for our purposes "AAIILNORSTTY" is also a "word" composed of the same letters as these two).

# We can then assign a number to every word, based on where it falls in an alphabetically sorted list of all words made up of the same group of letters. 
# One way to do this would be to generate the entire list of words and find the desired one, but this would be slow if the word is long.

# Given a word, return its number. 
# Your function should be able to accept any word 25 letters or less in length (possibly with some letters repeated), 
# and take no more than 500 milliseconds to run. 
# To compare, when the solution code runs the 27 test cases in JS, it takes 101ms.

# For very large words, you'll run into number precision issues in JS (if the word's position is greater than 2^53). 
# For the JS tests with large positions, there's some leeway (.000000001%). 
# If you feel like you're getting it right for the smaller ranks, 
# and only failing by rounding on the larger, submit a couple more times and see if it takes.

# Python, Java and Haskell have arbitrary integer precision, so you must be precise in those languages (unless someone corrects me).
# C# is using a long, which may not have the best precision, but the tests are locked so we can't change it.

# Sample words, with their rank:


test1 = "ABAB"
expect1 = 2
test2 = "AAAB"
expect2 = 1
test3 = "BAAA"
expect3 = 4
test4 = "QUESTION"
expect4 = 24572
test5 = "BOOKKEEPER"
expect5 = 10743
print(f"Tested: {listPosition(test1)}\nExpect: {expect1}")
print(f"Tested: {listPosition(test2)}\nExpect: {expect2}")
print(f"Tested: {listPosition(test3)}\nExpect: {expect3}")
print(f"Tested: {listPosition(test4)}\nExpect: {expect4}")
print(f"Tested: {listPosition(test5)}\nExpect: {expect5}")

# https://www.codewars.com/kata/53e57dada0cb0400ba000688