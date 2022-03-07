# Summary:
# https://www.nayuki.io/page/next-lexicographical-permutation-algorithm
#  Loved this solution and explanation. Very easy to understand.
class Solution:
    def nextPermutation(self, nums: list) -> None:
        # Find the first non-increasing element, starting from the end
        x = y = len(nums) - 1

        while x > 0 and nums[x-1] >= nums[x]:
            x -= 1

        # Two cases after completion
        # 1. x is 0 (if nums is sorted decreasingly). Simply reverse the sequence
        if x == 0:
            nums.reverse()
            return 
            
        # 2. If x > 0, find the first number greater than nums[i-1] starting from end
        while nums[y] <= nums[x-1]:
            y -= 1

        # Now x and y are at two different positions
        # x. first non-ascending number from end
        # y. first number greater than nums[i-1]
        
        # We'll swap these two numbers
        nums[x-1], nums[y] = nums[y], nums[x-1]
        
        # We'll reverse the suffix
        nums[x:] = nums[len(nums)-1:x-1:-1]
        # We don't need to return anything as we've modified nums in-place
        
test1 = [1,2,3]
expected1 = [1,3,2]
test2 = [3,2,1]
expected2 = [1,2,3]
test3 = [1,1,5]
expected3 = [1,5,1]

print(f"Testing {test1} yields {Solution.nextPermutation(test1)} expected {expected1}")
print(f"Testing {test2} yields {Solution.nextPermutation(test2)} expected {expected2}")
print(f"Testing {test3} yields {Solution.nextPermutation(test3)} expected {expected3}")


# 31. Next Permutation
# https://leetcode.com/problems/next-permutation/
# A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

# For example, for arr = [1,2,3], the following are considered permutations of arr: [1,2,3], [1,3,2], [3,1,2], [2,3,1].
# The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

# For example, the next permutation of arr = [1,2,3] is [1,3,2].
# Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
# While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
# Given an array of integers nums, find the next permutation of nums.

# The replacement must be in place and use only constant extra memory.
 
# Constraints:
# 1 <= nums.length <= 100
# 0 <= nums[i] <= 100