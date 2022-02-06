# Best solution:
    # Essentially keep a dict. 
    # buffer_dictionary = {}
    # for i in rangenums.__len()):
    #   if nums[i] in buffer_dictionary:
    #       return [buffer_dictionary[nums[i]], i] 
    
# My simple solution: 
class Solution:
    def twoSum(nums: list, target: int) -> int:
        for x in range(len(nums)):
            for y in range(x+1, len(nums)):
                if nums[x] + nums[y] == target:
                    return [x, y]

test1 = [3,2,4]
test1b = 6
expected1 = [1,2]
print(f"twoSum{test1, test1b} yields: {Solution.twoSum([3,2,4], 6)}. Expected: {expected1}")


# https://leetcode.com/problems/two-sum/

# Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

# You may assume that each input would have exactly one solution, and you may not use the same element twice.

# You can return the answer in any order.

# Example 1:

# Input: nums = [2,7,11,15], target = 9
# Output: [0,1]
# Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
# Example 2:

# Input: nums = [3,2,4], target = 6
# Output: [1,2]
# Example 3:

# Input: nums = [3,3], target = 6
# Output: [0,1]