# -------------------------------------------------------------------------------
# --------------------------- Enlightening solutions ----------------------------
# -------------------------------------------------------------------------------
def solution3(string,markers):
    parts = string.split('\n')
    for s in markers:
        parts = [v.split(s)[0].rstrip() for v in parts]
    return '\n'.join(parts)

from re import split, escape
def solution2(string, markers):
    if markers:
        pattern = "[" + escape("".join(markers)) + "]"
    else:
        pattern = ''
    return '\n'.join(split(pattern, line)[0].rstrip() for line in string.splitlines())
# -------------------------------------------------------------------------------
# -------------------------------- My solution ----------------------------------
# -------------------------------------------------------------------------------
# Well, this was messy and obnoxious. The kind of codewars problem I hate where you spend
# 90% of the time dealing with exceptional test cases that come up only at the time of submission.
def solution(string,markers):
    comment = False
    result = str()
    for letter in string:
        if letter in markers:
            comment = True
        if letter == "\n":
            comment = False
            if len(result) > 1:
                if result[-1] == " ":
                    result = result[:-1]
        if comment == False:
            result += letter

    if len(result) > 1:
        return result if result[-1] is not " " else result[:-1]
    else:
        return result

test_string = "apples, pears # and bananas\ngrapes\nbananas !apples"
test_markers = ["#", "!"]
expect = "apples, pears\ngrapes\nbananas"
print(f"Tested: {solution(test_string, test_markers)}\nExpect: {expect}")

# Complete the solution so that it strips all text that follows any of a set of comment markers passed in. 
# Any whitespace at the end of the line should also be stripped out.
# Given input:
# apples, pears # and bananas
# grapes
# bananas !apples

# Expected output:
# apples, pears
# grapes
# bananas

# The code would be called like so:
# result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
# # result should == "apples, pears\ngrapes\nbananas"

# https://www.codewars.com/kata/51c8e37cee245da6b40000bd