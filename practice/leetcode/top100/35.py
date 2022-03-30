# Summary:
# https://leetcode.com/problems/jump-game-ii/discuss/18019/10-lines-C%2B%2B-(16ms)-Python-BFS-Solutions-with-Explanations
# This problem has a nice BFS structure. 
# Let's illustrate it using the example nums = [2, 3, 1, 1, 4] in the problem statement. 
# We are initially at position 0. 
# Then we can move at most nums[0] steps from it. 
# So, after one move, we may reach nums[1] = 3 or nums[2] = 1. 
# So these nodes are reachable in 1 move. 
# From these nodes, we can further move to nums[3] = 1 and nums[4] = 4. 
# Now you can see that the target nums[4] = 4 is reachable in 2 moves.

# Putting these into codes, we keep two pointers start and end that record 
# the current range of the starting nodes. Each time after we make a move, 
# update start to be end + 1 and end to be the farthest index that can be 
# reached in 1 move from the current [start, end].

class Solution:
    # Best solution
    def jump(nums) -> int:
        n = len(nums)
        start, end, step = 0, 0, 0

        while end < n - 1:
            step += 1
            maxend = end + 1
            for i in range(start, end + 1):
                if i + nums[i] >= n - 1:
                    return step
                maxend = max(maxend, i + nums[i])
            start, end = end + 1, maxend
        return step


test1 = [2,3,1,1,4]
expected1 = 2
# Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
test2 = [2,3,0,1,4]
expected2 = 2
test3 = [3,2,5,2,1,1,1,20]
expected3 = 2

print(f"Testing {test1} yields {Solution.jump(test1)} expected {expected1}")
print(f"Testing {test2} yields {Solution.jump(test2)} expected {expected2}")
print(f"Testing {test3} yields {Solution.jump(test3)} expected {expected3}")

# 45. Jump Game II
# https://leetcode.com/problems/jump-game-ii/
# Given an array of integers nums sorted in non-decreasing order,
# find the starting and ending position of a given target value.
# Given an array of non-negative integers nums,
# you are initially positioned at the first index of the array.
# Each element in the array represents your maximum jump length at that position.
# Your goal is to reach the last index in the minimum number of jumps.
# You can assume that you can always reach the last index.

# Constraints:
# 1 <= nums.length <= 104
# 0 <= nums[i] <= 1000