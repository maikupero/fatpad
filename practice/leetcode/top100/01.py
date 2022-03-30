# Essentially keep a dict (map in other lanauges). 
# if target - current num = a num in the dict, that's our answer. otherwise, add current num to dict.

class Solution:
    # Best solution:
    def twoSum(nums: list, target: int) -> int:
        buffer_dictionary = {}

        for i, n in enumerate(nums):
            m = target - n
            if m in buffer_dictionary:
                return [buffer_dictionary[m], i]
            else:
                buffer_dictionary[n] = i

    # My simple solution: 
    def twoSum2(nums: list, target: int) -> int:
        for x in range(len(nums)):
            for y in range(x+1, len(nums)):
                if nums[x] + nums[y] == target:
                    return [x, y]

test1a = [3,2,4]
test1b = 6
expected1 = [1,2]
test2a = [3,2,4]
test2b = 6
expected2 = [1,2]
test3a = [3,3]
test3b = 6
expected3 = [0,1]
print(f"{test2a} with target: {test2b} yields: {Solution.twoSum(test2a, test2b)}. Expected: {expected2}")
print(f"{test3a} with target: {test3b} yields: {Solution.twoSum(test3a, test3b)}. Expected: {expected3}")
print(f"{test1a} with target: {test1b} yields: {Solution.twoSum(test1a, test1b)}. Expected: {expected1}")

# 1. Two Sum
# https://leetcode.com/problems/two-sum/
# Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
# You may assume that each input would have exactly one solution, and you may not use the same element twice.
# You can return the answer in any order.

# Constraints:
# 2 <= nums.length <= 104
# -109 <= nums[i] <= 109
# -109 <= target <= 109
# Only one valid answer exists.