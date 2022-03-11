# Summary: 
    # Essentially, put any non-zero num before all your 0s.
    # iterate through, and count up from index 0 of non-zero nums (placing them there as we find them). 
class Solution:
    # My solution
    def moveZeroes(nums):
        nonzero = 0
        for i in range(len(nums)):
            if nums[i] != 0:
                nums[nonzero], nums[i] = nums[i], nums[nonzero]
                nonzero += 1

test1 = [0,1,0,3,12]
expected1 = [1,3,12,0,0]
test2 = [0]
expected2 = [0]
 
# 283. Move Zeroes
# https://leetcode.com/problems/move-zeroes/

# Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
# Note that you must do this in-place without making a copy of the array.
# Constraints:
# 1 <= nums.length <= 104
# -231 <= nums[i] <= 231 - 1

# Follow up: Could you minimize the total number of operations done?