// Best solution:
function searchInsert(nums, target) {
    return binarySearch(nums, target, 0, nums.length - 1);
};


function binarySearch(array, target, start, end) {
    if (start > end) return start;
    
    const midPoint = Math.floor((start + end)/2);

    if (array[midPoint] === target) return midPoint;
    
	// search the left side
    if (array[midPoint] > target) return binarySearch(array, target, start, midPoint - 1);
    // search the right side
    if (array[midPoint] < target) return binarySearch(array, target, midPoint + 1, end);
}


// My simple solution:
 var searchInsert = function(nums, target) {
    if (nums.indexOf(target) != -1) {
        return nums.indexOf(target)
    } else if (target < nums[0]) {
        return 0
    } else if (target > nums[nums.length-1]) {
        return nums.length
    } else {
        i = 1
        while (nums.indexOf(target) == -1) {
            if (nums.indexOf(target-i) != -1) {
                return (nums.indexOf(target-i) + 1)
            } else if (nums.indexOf(target+i) != -1) {
                return (nums.indexOf(target+i))
            } else {
                i++;
            }
        }
    }
};
// Given Examples
exnums1 = [1,3,5,6]
extarg1 = 5
output1 = 2
exnums2 = [1,3,5,6]
extarg2 = 2
output2 = 1
exnums3 = [1,3,5,6]
extarg3 = 7
output3 = 4

console.log(`Example 1: ${exnums1}, ${extarg1} yields: ${searchInsert(exnums1, extarg1)}, expected: ${output1}`);
console.log(`Example 2: ${exnums2}, ${extarg2} yields: ${searchInsert(exnums2, extarg2)}, expected: ${output2}`);
console.log(`Example 3: ${exnums3}, ${extarg3} yields: ${searchInsert(exnums3, extarg3)}, expected: ${output3}`);

// Failed test cases
nums1 = [1,3,5,6]
target1 = 0
expected1 = 0
//  Got -1
nums2 = [3,6,7,8,10]
target2 = 5
expected2 = 1
//  Got 0

console.log(`Failed test: ${nums1}, ${target1} yields: ${searchInsert(nums1, target1)}, expected: ${expected1}`);
console.log(`Failed test: ${nums2}, ${target2} yields: ${searchInsert(nums2, target2)}, expected: ${expected2}`);



// The prompt
// https://leetcode.com/problems/search-insert-position/
// Given a sorted array of distinct integers and a target value, return the index if the target is found. 
// If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Constraints:
// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104

