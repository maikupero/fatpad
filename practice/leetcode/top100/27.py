# Summary:

class Solution:
    # My Solution :)
    def letterCombinations(digits):
        if len(digits) == 0:
            return []
        else:
            combinations = [""]
        keypad = {
            '2' : ['a','b','c'],
            '3' : ['d','e','f'],
            '4' : ['g','h','i'],
            '5' : ['j','k','l'],
            '6' : ['m','n','o'],
            '7' : ['p','q','r','s'],
            '8' : ['t','u','v'],
            '9' : ['w','x','y','z']
        }        
        
        for digit in digits:
            combos = []
            for letter in keypad[digit]:
                for base in combinations:
                    combos.append(base + letter)
            combinations = combos

        return combinations

# Example cases:
test1 = "23"
expected1 = ["ad","ae","af","bd","be","bf","cd","ce","cf"]
test2 = ""
expected2 = []
test3 = "2"
expected3 = ["a","b","c"]

print(f"Testing {test1} yields {Solution.letterCombinations(test1)} expected {expected1}")
print(f"Testing {test2} yields {Solution.letterCombinations(test2)} expected {expected2}")
print(f"Testing {test3} yields {Solution.letterCombinations(test3)} expected {expected3}")

# 17. Letter Combinations of a Phone Number
# https://leetcode.com/problems/letter-combinations-of-a-phone-number/

# Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. 
# Return the answer in any order.
# A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
 
# Constraints:
# 0 <= digits.length <= 4
# digits[i] is a digit in the range ['2', '9'].