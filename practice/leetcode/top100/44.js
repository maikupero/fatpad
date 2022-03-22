// Summary of Best Solution
// https://leetcode.com/problems/sort-colors/discuss/1049327/4-approaches-for-your-interview

// 3 ways
// 1. Brute Force Checking
// 2. One pass Algorithm
// 3. Intuitive Approach

/*
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// One pass way
var sortColors2 = function(nums) {
    console.log(nums)
    
    let l = 0, m = 0, r = nums.length-1;

    while (m <= r) {
        if (nums[m] === 0) {
            swap(l,m);
            m++;
            l++;
        } else if (nums[m] === 1) {
            m++;
        } else {
            swap(m,r);
            r--;
        }
    }

    function swap(a,b) {
        [nums[b],nums[a]] = [nums[a],nums[b]]
    }

    console.log(nums)
};
// First way (my first intuition) of brute force. 
// Also intuited you can do it without counting 2s, just count the other 2, and calc the difference.
var sortColors1 = function(nums) {
    console.log(nums)
    let reds=0, whites=0, blues=0;

    for (let num of nums) {
        if (num === 0) reds++;
        else if (num === 1) whites++;
        else blues++;
    }

    nums.length = 0;

    for (let i = 0; i < reds; i++) nums.push(0);
    for (let i = 0; i < whites; i++) nums.push(1);
    for (let i = 0; i < blues; i++) nums.push(2);
    
    console.log(nums)
};


let test1 = [2,0,2,1,1,0];
let expected1 = [0,0,1,1,2,2];
let test2 = [2,0,1];
let expected2 = [0,1,2]
 
 
console.log(`||| TESTED with target ${test1} \n||| RETURNS: ${sortColors2(test1)}\n||| EXPECTED: ${expected1}`)
console.log(`||| TESTED with target ${test2} \n||| RETURNS: ${sortColors2(test2)}\n||| EXPECTED: ${expected2}`)

// 75. Sort Colors
// https://leetcode.com/problems/sort-colors/
// Given an array nums with n objects colored red, white, or blue, 
// sort them in-place so that objects of the same color are adjacent,
// with the colors in the order red, white, and blue.
// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
// You must solve this problem without using the library's sort function.

// Constraints:
// n == nums.length
// 1 <= n <= 300
// nums[i] is either 0, 1, or 2.
 
// Follow up: Could you come up with a one-pass algorithm using only constant extra space?