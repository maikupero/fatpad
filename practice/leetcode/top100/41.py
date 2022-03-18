class Solution:
    # Starting to see clearly the patterns of these problems.
    def uniquePaths(self, m: int, n: int) -> int:
        return 0

test1m = 3
test1n = 7
expected1 = 28
test2m = 3
test2n = 2
expected2 = 3
# Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
# 1. Right -> Down -> Down
# 2. Down -> Down -> Right
# 3. Down -> Right -> Down
 
print(f"Testing {test1m,test1n} returns {Solution.uniquePaths(test1m,test1n)} expected {expected1}")
print(f"Testing {test2m,test2n} returns {Solution.uniquePaths(test2m,test2n)} expected {expected2}")

# 62. Unique Paths
# https://leetcode.com/problems/unique-paths/
# There is a robot on an m x n grid. 
# The robot is initially located at the top-left corner (i.e., grid[0][0]). 
# The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). 
# The robot can only move either down or right at any point in time.
# Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.
# The test cases are generated so that the answer will be less than or equal to 2 * 109.

# Constraints:
# 1 <= m, n <= 100