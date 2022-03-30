# My solution: This took me WAY too long, even though I had the logic down about 5 minutes in. 

class Solution:  
    def maxSubArray(nums):
        for i in range(1, len(nums)):
            if nums[i-1] > 0:
                nums[i] += nums[i-1]
        return max(nums)

    
    
    
    # def maxSubArray(nums):
    #     global current
    #     current = nums[0]

    #     while len(nums) > 1:
    #         nums = Solution.mergeLeftmost(nums)

    #     if len(nums) == 1:
    #         if nums[0] > current: return nums[0]

    #     return current 


    # def mergeLeftmost(nums):
    #     global current

    #     start = nums[0]
    #     next = nums[1]
    #     both = start + next

    #     subcount = max([start, next, both])
    #     print(nums, current, subcount)
    #     if current < subcount:
    #         current = subcount

    #     if len(nums) > 2: 
    #         # If net loss, slice off both.
    #         if (both < 1 and next < start):
    #             return nums[2:]
    #         # If left is negative, slice from next. If combined is net gain, combine before doing so.
    #         elif both > next:
    #             nums[1] = both
    #     return nums[1:]




    # Retired attempt at trimming unneeded ends off the sides. New approach. 
    # def trimNums(nums):
    #     ind_x = 0
    #     counter = 0
    #     while True:
    #         counter += nums[ind_x] 
    #         print(f"X: {nums[ind_x]}, counter: {counter}")
    #         if counter >= 0:
    #             break
    #         else:
    #             ind_x += 1

    #     ind_y = 0
    #     counter = 0
    #     while True:
    #         counter += nums[len(nums)-(1+ind_y)] 
    #         print(f"Y: {nums[len(nums)-(1+ind_y)]}, counter: {counter}")
    #         if counter >= 0:
    #             break
    #         else:
    #             ind_y += 1

    #     print(ind_x, ind_y)
    #     return nums[ind_x:-ind_y]


# Examples
test1 = [-2,1,-3,4,-1,2,1,-5,4]
expected1 = 6
test2 = [1]
expected2 = 1
test3 = [5,4,-1,7,8]
expected3 = 23

print(f"twoSum{test1} yields: {Solution.maxSubArray(test1)}. Expected: {expected1}")
print(f"twoSum{test2} yields: {Solution.maxSubArray(test2)}. Expected: {expected2}")
print(f"twoSum{test3} yields: {Solution.maxSubArray(test3)}. Expected: {expected3}")

mytest1 = [9,10,-20,-4,8,-3,15,-6]
expectedresult1 = 20
mytest2 = [1,-2,3,-1,4,-5,7]
expectedresult2 = 8
mytest3 = [20,-18,0,5,-4,6,-5,4]
expectedresult3 = 20

print(f"twoSum{mytest1} yields: {Solution.maxSubArray(mytest1)}. Expected: {expectedresult1}")
print(f"twoSum{mytest2} yields: {Solution.maxSubArray(mytest2)}. Expected: {expectedresult2}")
print(f"twoSum{mytest3} yields: {Solution.maxSubArray(mytest3)}. Expected: {expectedresult3}")

failed1 = [-2,-3,-1]
correct1 = -1
failed2 = [-2,1]
correct2 = 1
failed3 = [-1,1,2,1]
correct3 = 4
failed4 = [-3,-2,0,-1]
correct4 = 0
failed5 = [-2,-2,-3,0,-3,1,-3]
correct5 = 1
print(f"twoSum{failed1} yields: {Solution.maxSubArray(failed1)}. Expected: {correct1}")
print(f"twoSum{failed2} yields: {Solution.maxSubArray(failed2)}. Expected: {correct2}")
print(f"twoSum{failed3} yields: {Solution.maxSubArray(failed3)}. Expected: {correct3}")
print(f"twoSum{failed4} yields: {Solution.maxSubArray(failed4)}. Expected: {correct4}")
print(f"twoSum{failed5} yields: {Solution.maxSubArray(failed5)}. Expected: {correct5}")

# 53. Maximum Subarray
# https://leetcode.com/problems/maximum-subarray/
# Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
# A subarray is a contiguous part of an array.

# Constraints:
# 1 <= nums.length <= 105
# -104 <= nums[i] <= 104

# Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
