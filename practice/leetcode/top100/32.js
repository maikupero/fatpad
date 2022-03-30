// Summary

// My Solution
 var search = function(nums, target) {
    let left = 0, right = nums.length-1
    while (left <= right) {
        if (nums[left] == target) return left
        if (nums[right] == target) return right
        left++;
        right--;
    }
    return -1
};

test1a = [4,5,6,7,0,1,2]
test1b = 0
expected1 = 4
test2a = [4,5,6,7,0,1,2]
test2b = 3
expected2 = -1
test3a = [1]
test3b = 0
expected3 = -1
test4a = [4,5,6,7,8,9,2,3]
test4b = 2
expected4 = 6

console.log(`${test1a} with target ${test1b} returns ${search(test1a, test1b)} expected: ${expected1}`)
console.log(`${test2a} with target ${test2b} returns ${search(test2a, test2b)} expected: ${expected2}`)
console.log(`${test3a} with target ${test3b} returns ${search(test3a, test3b)} expected: ${expected3}`)
console.log(`${test4a} with target ${test4b} returns ${search(test4a, test4b)} expected: ${expected4}`)

// 33. Search in Rotated Sorted Array
// https://leetcode.com/problems/swap-nodes-in-pairs/
// There is an integer array nums sorted in ascending order (with distinct values).
// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) 
// such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). 
// For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, 
// return the index of target if it is in nums, or -1 if it is not in nums.
// You must write an algorithm with O(log n) runtime complexity.

// Constraints:
// 1 <= nums.length <= 5000
// -104 <= nums[i] <= 104
// All values of nums are unique.
// nums is an ascending array that is possibly rotated.
// -104 <= target <= 104