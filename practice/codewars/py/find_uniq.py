# -------------------------------------------------------------------------------
# --------------------------- Enlightening solutions ----------------------------
# -------------------------------------------------------------------------------
def find_uniq3(arr):
    s = set(arr)
    for e in s:
        if arr.count(e) == 1:
            return e
            
def find_uniq2(arr):
    a = sorted(arr)
    return a[0] if a[0] != a[1] else a[-1]
# -------------------------------------------------------------------------------
# -------------------------------- My solution ----------------------------------
# -------------------------------------------------------------------------------
# First intuition: make dicts, return the key with count of 1.
def find_uniq(arr):
    counts = {}
    for i in arr:
        if str(i) not in counts:
            counts[str(i)] = 1
        elif counts[str(i)] == 1:
            counts[str(i)] += 1
    for i in counts: 
        if counts[i] == 1:
            return float(i)

test = find_uniq([ 1, 1, 1, 2, 1, 1 ])
expect = 2
test2 = find_uniq([ 0, 0, 0.55, 0, 0 ])
expect2 = 0.55
print(f"Tested: {test}\nExpect: {expect}")
print(f"Tested: {test2}\nExpect: {expect2}")

# There is an array with some numbers. 
# All numbers are equal except for one. Try to find it!
# It’s guaranteed that array contains at least 3 numbers.
# The tests contain some very huge arrays, so think about performance.

# https://www.codewars.com/kata/585d7d5adb20cf33cb000235