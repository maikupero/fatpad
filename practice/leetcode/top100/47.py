# Honestly have no idea what this is. 
# https://leetcode.com/problems/unique-binary-search-trees/discuss/31761/Python-with-explanation.-I-guess-you-could-call-this-%22DP%22...
# Study this one more.

class Solution:

    def numTrees(n: int) -> int:
        cache = {}

        def countTrees(n, cache):
            if n == 0:
                return 1
            if n == 1:
                return 1
            
            if cache.get(n, -1) != -1: 
                return cache[n]

            result = 0
        
            for i in range(n):
                leftTrees = countTrees(i, cache)
                rightTrees = countTrees(n - i - 1, cache)
                result += leftTrees * rightTrees
            cache[n] = result
            return result

        return countTrees(n, cache)


test1 = 3
expected1 = 5

test2 = 1
expected2 = 1
 

print(f"Testing {test1} returns {Solution.numTrees(test1)} expected {expected1}")
print(f"Testing {test2} returns {Solution.numTrees(test2)} expected {expected2}")

# 96. Unique Binary Search Trees
# https://leetcode.com/problems/unique-binary-search-trees/
# Given an integer n, return the number of structurally unique BST's (binary search trees) which has exactly n nodes of unique values from 1 to n.
# Constraints:
# 1 <= n <= 19