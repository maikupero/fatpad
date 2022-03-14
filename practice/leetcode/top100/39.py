class Solution:
    # Intuition says to start at the end, and work back. 
    # At the end, if we're at index 0, true, otherwise, false. 
    #  Found a solution that did just that, and explained it well.
    # https://leetcode.com/problems/jump-game/discuss/596454/Python-Simple-solution-with-thinking-process-Runtime-O(n)

    def canJump(nums) -> bool:
        end = len(nums) - 1
        for i in range(len(nums)-2,-1,-1):  # Iterate from second to last item -> first item
            if (i + nums[i]) >= end:        # If next step can reach our current end
                end = i                     # make it our current end.
        return end == 0	

test1 = [2,3,1,1,4]
expected1 = True
# Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
test2 = [3,2,1,0,4]
expected2 = False
# Explanation: You will always arrive at index 3 no matter what. 
# Its maximum jump length is 0, which makes it impossible to reach the last index.
 
print(f"Testing {test1} returns {Solution.canJump(test1)} expected {expected1}")
print(f"Testing {test2} returns {Solution.canJump(test2)} expected {expected2}")

# 55. Jump Game
# https://leetcode.com/problems/jump-game/
# You are given an integer array nums. You are initially positioned at the array's first index, 
# and each element in the array represents your maximum jump length at that position.
# Return true if you can reach the last index, or false otherwise.

# Constraints:
# 1 <= nums.length <= 104
# 0 <= nums[i] <= 105