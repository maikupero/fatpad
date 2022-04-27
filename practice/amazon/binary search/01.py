# https://leetcode.com/problems/binary-search/

# End points, set mid point, check lower or higher, reset high or low end point and repeat. 
def search(nums: list, target: int) -> int:
    left = 0
    right = len(nums)-1
    while (left <= right):
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        elif target < nums[mid]:
            right = mid-1
        else:
            left = mid+1
    return -1
    nums = search(nums[:i]) if target < i else search(nums[i:])


# Input: nums = [-1,0,3,5,9,12], target = 9
# Output: 4
# Explanation: 9 exists in nums and its index is 4

# Input: nums = [-1,0,3,5,9,12], target = 2
# Output: -1
# Explanation: 2 does not exist in nums so return -1

test1a = [-1,0,3,5,9,12,15]
test1b = 9
expected1 = 4

test2a = [-1,0,3,5,9,12,15]
test2b = 2
expected2 = -1

print(f"{test1a} with target: {test1b} yields: {search(test1a, test1b)}. Expected: {expected1}")
print(f"{test2a} with target: {test2b} yields: {search(test2a, test2b)}. Expected: {expected2}")
