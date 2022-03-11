# Summary:

class Solution:
    # My Solution :)
        def generateParenthesis(n: int):
            # Base Case
            if not n: 
                return []

            # Introduce what we need before our recursive function. 
            # n instances of ( and n instances of ). for n=3, both ()()() and ((())), and all in between.
            left, right, combinations = n, n, []
            Solution.depthFirst(left, right, combinations, "")
            return combinations
            
        def depthFirst(left, right, combinations, combination):
            if right < left:
                return
            if not left and not right:
                combinations.append(combination) 
                return
            if left:
                Solution.depthFirst(left-1, right, combinations, combination + "(")
            if right:
                Solution.depthFirst(left, right-1, combinations, combination + ")")

                

# Example cases:
test1 = 3
expected1 = ["((()))","(()())","(())()","()(())","()()()"]
test2 = 1
expected2 = ["()"]
test3 = 2
expected3 = ["()()","(())"]

print(f"Testing {test1} yields {Solution.generateParenthesis(test1)} expected {expected1}")
print(f"Testing {test2} yields {Solution.generateParenthesis(test2)} expected {expected2}")
print(f"Testing {test3} yields {Solution.generateParenthesis(test3)} expected {expected3}")


# 22. Generate Parentheses
# https://leetcode.com/problems/generate-parentheses/
# Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.


 

# Constraints:
# 1 <= n <= 8