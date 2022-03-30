class Solution:
    # Smart way: https://leetcode.com/problems/unique-paths/discuss/22975/Python-easy-to-understand-solutions-(math-dp-O(m*n)-and-O(n)-space).
    # Simple way: https://leetcode.com/problems/unique-paths/discuss/23204/44ms-Python-DP-solution
    # Starting to see clearly the patterns of these problems.
    # 0  1  1  1  1  1  1
    # 1  2  3  4  5  6  7
    # 1  3  6  10 15 21 28

    # 1  4  10 20 35 66 94

    # Learned about xrange
    # initializing a with range(), x with xrange()
    # a = range(1,10000)
    # x = xrange(1,10000)

    # The return type of range() is : 
    # <type 'list'>
    # The return type of xrange() is : 
    # <type 'xrange'>

    # The size allotted using range() is : 
    # 80064
    # The size allotted using xrange() is : 
    # 40

    # However, as it's type xrange it cannot be sliced x[2:5] will be an error.
    # ********
    # Turns out xrange is python 2 only.
    # ********
    
    def uniquePaths(m: int, n: int) -> int:
        if not m or not n:
            return 0

        cur = [1] * n
        for i in range(1, m):
            for j in range(1, n):
                cur[j] += cur[j-1]
        return cur[-1]

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