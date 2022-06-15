# -------------------------------------------------------------------------------
# --------------------------- Enlightening solutions ----------------------------
# -------------------------------------------------------------------------------
def countBits(n):
    total = 0
    while n > 0:
        total += n % 2
        n >>= 1
    return total

# -------------------------------------------------------------------------------
# -------------------------------- My solution ----------------------------------
# -------------------------------------------------------------------------------
# Craft the number in binary, then count the 1s.
# Before I just use bin() how would I do this..
def count_bits(n):
    if n == 0: return 0

    base = 2
    find_n = int()
    base2_num = list()
    while find_n*2 <= n:
        find_n = base**len(base2_num)
        base2_num.append(find_n)
    
    base2_num = sorted(base2_num, reverse=True)
    print(base2_num)
    build_n = 0
    binary_num = list()
    for i in base2_num:
        if build_n + i <= n:
            binary_num.append(1)
            build_n += i
        else:
            binary_num.append(0)

    return binary_num.count(1)

test = count_bits(0)
expect = 0
test2 = count_bits(4)
expect2 = 1
test3 = count_bits(10)
expect3 = 2
print(f"Tested: {test}\nExpect: {expect}")
print(f"Test 2: {test2}\nExpect: {expect2}")
print(f"Test 3: {test3}\nExpect: {expect3}")

# Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

# Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
# https://www.codewars.com/kata/525f50e3b73515a6db000b83