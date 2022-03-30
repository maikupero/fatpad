// Best solution
// https://leetcode.com/problems/counting-bits/discuss/1808435/Python-Javascript-Very-Deep-Explanation

/*
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/*
 * @param {number} n
 * @return {number[]}
 */

function countBits(n) {    
    let ans = Array(n + 1).fill(0);
    let offset = 1;

    for (let i = 1; i < ans.length; i++) {
        // Update offset to every bit number (1,2,4,8..)
        if (offset * 2 === i) {
            offset = i; 
        }

        ans[i] = 1 + ans[i - offset];
    }
  
    return ans;
};

// Definitely decided to just write a non-cheat function that gives an array of the bits of an int.
 var getBits = function(n) {
    const ans = Array(Math.ceil(Math.sqrt(n))).fill(0)
    console.log(ans.length)
    while (n > 0) {
        n = bitChunk(n)
    }

    function bitChunk(num) {
        let chunk = 1;
        let counter = 0;

        while (chunk*2 <= num) {
            chunk*=2
            counter++
        } 

        addToAns(counter)
        return num-chunk
    }

    function addToAns(pow) {
        while (ans[pow] !== 0) {
            ans[pow] = 0
            pow++
        }
        ans[pow] = 1
    }

    return ans
    //  or ans.reverse() for usual bit syntax

};


test1 = 2
expected1 = [0,1,1]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10

test2 = 5
expected2 = [0,1,1,2,1,2]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// 3 --> 11
// 4 --> 100
// 5 --> 101


// test1 = 2
// expected1 = [0,1]
// test2 = 5
// expected2 = [1,0,1]
// test3 = 19
// expected3 = [1,1,0,0,1]
 
 
console.log(`||| TESTED with target ${test1} \n||| RETURNS: ${countBits(test1)}\n||| EXPECTED: ${expected1}`)
console.log(`||| TESTED with target ${test2} \n||| RETURNS: ${countBits(test2)}\n||| EXPECTED: ${expected2}`)
// console.log(`||| TESTED with target ${test3} \n||| RETURNS: ${countBits(test3)}\n||| EXPECTED: ${expected3}`)

// 338. Counting Bits
// https://leetcode.com/problems/counting-bits/
// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), 
// ans[i] is the number of 1's in the binary representation of i.

// Constraints:
// 0 <= n <= 105

// Follow up:
// It is very easy to come up with a solution with a runtime of O(n log n). Can you do it in linear time O(n) and possibly in a single pass?
// Can you do it without using any built-in function (i.e., like __builtin_popcount in C++)?