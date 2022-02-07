// Best solution:

// Solution for their specific prompt which fails sequences if different order at any point:

// My simple solution for checking right amounts in right order: 
/*
* @param {number[]} nums
* @param {number} target
* @return {number}
*/
 var searchInsert = function(nums, target) {
    return 0
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

console.log(`Example 1: ${exnums1, extarg1} yields: ${searchInsert(exnums1, extarg1)}, expected: ${output1}`);
console.log(`Example 2: ${exnums2, extarg2} yields: ${searchInsert(exnums2, extarg2)}, expected: ${output2}`);
console.log(`Example 3: ${exnums3, extarg3} yields: ${searchInsert(exnums3, extarg3)}, expected: ${output3}`);
testing = []
console.log(testing.length)
// My created test cases
// test1 = "({{}})"
// expected1 = true
// test2 = "({[}])"
// expected2 = false
// test3 = "({[]}}"
// expected3 = false
// console.log(`Test 1: ${test1} yields: ${searchInsert(test1)}, expected: ${expected1}`)
// console.log(`Test 2: ${test2} yields: ${searchInsert(test2)}, expected: ${expected2}`)
// console.log(`Test 3: ${test3} yields: ${searchInsert(test3)}, expected: ${expected3}`)


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

