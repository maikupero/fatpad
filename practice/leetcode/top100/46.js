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

79. Word Search
https://leetcode.com/problems/word-search/
Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

 

Example 1:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true
Example 2:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true
Example 3:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false
 

Constraints:

m == board.length
n = board[i].length
1 <= m, n <= 6
1 <= word.length <= 15
board and word consists of only lowercase and uppercase English letters.
 

Follow up: Could you use search pruning to make your solution faster with a larger board?