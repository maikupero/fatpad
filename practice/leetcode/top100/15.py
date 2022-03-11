class Solution:
# Best Solution

# My solution
    def majorityElement(nums):
        minimum = len(nums) // 2
        count = {}
        for num in nums:
            if not count.get(num):
                count[num] = 1
            else:
                count[num] += 1

        for k,v in count.items():
            if v > minimum:
                return k

test1 = [3,2,3]
expected1 = 3

test2 = [2,2,1,1,1,2,2]
expected2 = 2

failed3 = [3,3,4]
expected3 = 3
print(f"singleNumber{test1} yields: {Solution.majorityElement(test1)}. Expected: {expected1}")
print(f"singleNumber{test2} yields: {Solution.majorityElement(test2)}. Expected: {expected2}")
print(f"singleNumber{failed3} yields: {Solution.majorityElement(failed3)}. Expected: {expected3}")

 
# https://leetcode.com/problems/majority-element/
# Given an array nums of size n, return the majority element.
# The majority element is the element that appears more than ⌊n / 2⌋ times. 
# You may assume that the majority element always exists in the array.

# Constraints:
# n == nums.length
# 1 <= n <= 5 * 104
# -231 <= nums[i] <= 231 - 1

# Follow-up: Could you solve the problem in linear time and in O(1) space?