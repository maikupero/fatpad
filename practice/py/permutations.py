# -------------------------------------------------------------------------------
# --------------------------- Enlightening solutions ----------------------------
# -------------------------------------------------------------------------------

# Without itertools! What I was trying to do:
def truepermutations(string):
    if len(string) == 1: return set(string)
    first = string[0]
    rest = truepermutations(string[1:])
    result = set()
    for i in range(0, len(string)):
        for p in rest:
            result.add(p[0:i] + first + p[i:])
    return result

# -------------------------------------------------------------------------------
# -------------------------------- My solution ----------------------------------
# -------------------------------------------------------------------------------
# Boring itertools solution
from itertools import permutations as findperms
def permutations(string):
    perms = findperms(string)
    result = []
    for p in set(perms):
        result.append(''.join(p))
    return result

test = 'a'
expect = ['a']
test2 = 'ab'
expect2 = ['ab', 'ba']
test3 = 'aabb'
expect3 = ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
test4 = 'abc'
expect4 = ['abc','acb','bac','bca','cab','cba']
print(f"Tested: {truepermutations(test)}\nExpect: {expect}")
print(f"Tested: {truepermutations(test2)}\nExpect: {expect2}")
print(f"Tested: {truepermutations(test3)}\nExpect: {expect3}")
print(f"Tested: {truepermutations(test4)}\nExpect: {expect4}")

# https://www.codewars.com/kata/5254ca2719453dcc0b00027d