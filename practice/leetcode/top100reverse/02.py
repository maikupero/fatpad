def isValid(s: str) -> bool:
    if len(s) < 2 or len(s)%2 != 0:
        return False

    brackets = {
        "}": "{",
        ")": "(",
        "]": "["
    }
    stack = []

    for c in s:
        curr = c
        found = brackets.get(curr)
        print(curr, found)

        if found and stack:
            if not stack or found != stack[-1]:
                return False
            else:
                stack = stack[:-1]
        else:
            stack.append(curr)
    if stack:
        return False
    else:
        return True


test1 = "()"
expected1 = True
test2 = "()[]{}"
expected2 = True
test3 = "(]"
expected3 = False

print(f"{test1} with target: {test1} yields: {isValid(test1)}. Expected: {expected1}")
print(f"{test2} with target: {test2} yields: {isValid(test2)}. Expected: {expected2}")
print(f"{test3} with target: {test3} yields: {isValid(test3)}. Expected: {expected3}")

# 20. Valid Parentheses
# https://leetcode.com/problems/valid-parentheses/
# Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
# An input string is valid if:
# Open brackets must be closed by the same type of brackets.
# Open brackets must be closed in the correct order.
 

