# Summary:

class Solution:
    # Best solution
    # "When you hear O(logn) or sorted array, your mind should go to binary search!"
    def searchRange(self, nums, target):
        result = [-1, -1] #1
        result[0] = self.findIndex(nums, target, "left")  #2 
        result[1] = self.findIndex(nums, target, "right")  #3
        return result #4
    def findIndex(self, nums, target, side):	#### Helper function (all except one line were identical).

        index = -1 #5 
        low, high = 0, len(nums) -1 #6
        
        while low <= high: #7
            mid = low + (high - low)//2 #8
			
            if nums[mid] == target: #9
                index = mid #10
                if side == "left":
                    high = mid - 1 
                else:
                    low = mid + 1
            elif nums[mid] > target:  #12
                high = mid - 1 #13
            else:  #14
                low = mid + 1 #15       
        
        return index




    # My (too slow) solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        right = len(nums) - 1
        left, li, ri = 0
        while left < right:
            if nums[left] != target:
                left += 1
            else:
                li = left
            if nums[right] != target:
                right -= 1
            else:
                ri = right

        return [li, ri]
        
test1a = [5,7,7,8,8,10]
test1b = 8
expected1 = [3,4]
test2a = [5,7,7,8,8,10]
test2b = 6
expected2 = [-1,-1]
test3a = []
test3b = 0
expected3 = [-1,-1]

print(f"Testing {test1a, test1b} yields {Solution.searchRange(test1a, test1b)} expected {expected1}")
print(f"Testing {test2a, test2b} yields {Solution.searchRange(test2a, test2b)} expected {expected2}")
print(f"Testing {test3a, test3b} yields {Solution.searchRange(test3a, test3b)} expected {expected3}")

# 34. Find First and Last Position of Element in Sorted Array
# https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/# A permutation of an array of integers is an arrangement of its members into a sequence or linear order.
# Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
# If target is not found in the array, return [-1, -1].
# You must write an algorithm with O(log n) runtime complexity.
# Constraints:
# 0 <= nums.length <= 105
# -109 <= nums[i] <= 109
# nums is a non-decreasing array.
# -109 <= target <= 109