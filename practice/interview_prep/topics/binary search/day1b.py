# https://leetcode.com/problems/guess-number-higher-or-lower/

# The guess API is already defined for you.
# @param num, your guess
# @return -1 if num is higher than the picked number
#          1 if num is lower than the picked number
#          otherwise return 0
# def guess(num: int) -> int:

def guessNumber(self, n: int) -> int:
    lower = 0
    upper = n
    while lower <= upper:
        mid = (lower + upper) // 2
        response = guessNumber(mid)
        if response == -1:
            upper = mid-1
        elif response == 1:
            lower = mid+1
        else: 
            return mid
    

test1a = 10
test1b = 6
expected1 = 6
test2a = 1
test2b = 1
expected2 = 1
test3a = 2
test3b = 1
expected3 = 1

print(f"Guess {test1a} with target: {test1b} yields: {guessNumber(test1a, test1b)}. Expected: {expected1}")
print(f"Guess {test2a} with target: {test2b} yields: {guessNumber(test2a, test2b)}. Expected: {expected2}")

