/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    // Slow, obvious way would be to have every eleent check against every other element.
    // Declare a var, for loop to the end, increment var, if var + cut = target return indices. 

    // Faster way would be to use an object and match it against the target. 
    // Key as the number, value as the index. 
    let hash = {};

    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        if (hash[target - n] !== undefined) { //
            console.log(hash);
            return [hash[target - n], i];
        }
        hash[n] = i // Store the index as the value (so we can return it later)
    }
    
    return []
};

// EXAMPLE CASES
test1a = [2,7,11,15]
test1b = 9
expected1 = [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

test2a = [3,2,4]
test2b = 6
expected2 = [1,2]

test3a = [3,3]
test3b = 6
expected3 = [0,1]

// My test case
test4a = [2,5,3,7,10,4,14]
test4b = 16
expected4 = [0,6]

console.log(`||| TESTED with target ${test1a, test1b} \n||| RETURNS: ${twoSum(test1a, test1b)}\n||| EXPECTED: ${expected1}`)
console.log(`||| TESTED with target ${test2a, test2b} \n||| RETURNS: ${twoSum(test2a, test2b)}\n||| EXPECTED: ${expected2}`)
console.log(`||| TESTED with target ${test3a, test3b} \n||| RETURNS: ${twoSum(test3a, test3b)}\n||| EXPECTED: ${expected3}`)
console.log(`||| TESTED with target ${test4a, test4b} \n||| RETURNS: ${twoSum(test4a, test4b)}\n||| EXPECTED: ${expected4}`)


 

// # 1. Two Sum
// # https://leetcode.com/problems/two-sum/
// # Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// # You may assume that each input would have exactly one solution, and you may not use the same element twice.
// # You can return the answer in any order.

// # Constraints:
// # 2 <= nums.length <= 104
// # -109 <= nums[i] <= 109
// # -109 <= target <= 109
// # Only one valid answer exists.