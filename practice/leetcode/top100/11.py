class Solution:
    # Best solution:
    def singleNumberBest(self, nums):
        for i in range(1,len(nums)):
            nums[0] ^= nums[i]
        return nums[0]

    # My solution - pretty good!: 
    def singleNumber(nums):
        pairs = {}
        for i in nums:
            if i not in pairs:
                pairs[i] = 1
            else:
                del pairs[i]

        for key, val in pairs.items():
            return key
        

test1 = [2,2,1]
expected1 = 1
test2 = [4,1,2,1,2]
expected2 = 4
test3 = [1]
expected3 = 1

print(f"singleNumber{test1} yields: {Solution.singleNumber(test1)}. Expected: {expected1}")
print(f"singleNumber{test2} yields: {Solution.singleNumber(test2)}. Expected: {expected2}")
print(f"singleNumber{test3} yields: {Solution.singleNumber(test3)}. Expected: {expected3}")

# https://leetcode.com/problems/single-number/
# Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
# You must implement a solution with a linear runtime complexity and use only constant extra space.

# Constraints:
# 1 <= nums.length <= 3 * 104
# -3 * 104 <= nums[i] <= 3 * 104
# Each element in the array appears twice except for one element which appears only once.