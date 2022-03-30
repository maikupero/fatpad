// Summary

// Best Solution
var combinationSum = function(candidates, target) {
    let buffer = [], combinations = [];

    function backtracking(start, target, buffer) {
        if (target === 0) {
            combinations.push([...buffer])
            return
        } 
        if (target < 0) return;

        for (let i = start; i < candidates.length; i++) {
            buffer.push(candidates[i]);
            backtracking(i, target - candidates[i], buffer)
            buffer.pop();
        }
    }

    backtracking(0, target, buffer);
    return combinations
};


 
test1a = [2,3,6,7]
test1b = 7
expected1 = [[2,2,3],[7]]
// Explanation:
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.

test2a = [2,3,5]
test2b = 8
expected2 = [[2,2,2,2],[2,3,3],[3,5]]

test3a = [2]
test3b = 1
expected3 = []
 
console.log(`${test1a} with target ${test1b} returns ${combinationSum(test1a, test1b)} expected: ${expected1}`)
console.log(`${test2a} with target ${test2b} returns ${combinationSum(test2a, test2b)} expected: ${expected2}`)
console.log(`${test3a} with target ${test3b} returns ${combinationSum(test3a, test3b)} expected: ${expected3}`)

// 39. Combination Sum
// https://leetcode.com/problems/combination-sum/
// There is an integer array nums sorted in ascending order (with distinct values).
// Given an array of distinct integers candidates and a target integer target, 
// return a list of all unique combinations of candidates where the chosen numbers sum to target. 
// You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times. 
// Two combinations are unique if the frequency of at least one of the chosen numbers is different.
// It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

// Constraints:
// 1 <= candidates.length <= 30
// 1 <= candidates[i] <= 200
// All elements of candidates are distinct.
// 1 <= target <= 500