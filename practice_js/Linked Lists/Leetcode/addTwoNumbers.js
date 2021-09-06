
/*
* Definition for singly-linked list.
* function ListNode(val, next) {
*     this.val = (val===undefined ? 0 : val)
*     this.next = (next===undefined ? null : next)
* }
*
*
* @param {ListNode} l1
* @param {ListNode} l2
* @return {ListNode}
*/

 var addTwoNumbers = function(l1, l2) {
    
};

// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order, and each of their nodes contains a single digit. 
// Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:
// Input: l1 = [0], l2 = [0]
// Output: [0]

// Example 3:
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
 
// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.


// ---------------------------------------- FAILURE ----------------------------------------
// let addTwoNumbers = (l1, l2) => {


//     let int1 = parseInt(l1.reverse().join(''));
//     let int2 = parseInt(l2.reverse().join(''));
//     let reversedsum = (int1 + int2).toString();
//     let sum = [];

//     for (let x = reversedsum.length-1; x >= 0; x--) {
//         sum.push(parseInt(reversedsum[x]));
//     }

//     return sum
// }
// console.log(addTwoNumbers([3,7],[9,4]), 'expected 73+49 -> 122 -> [2,2,1]');
// console.log(addTwoNumbers([2,4,3], [5,6,4]), 'expected [7,0,8]');
// console.log(addTwoNumbers([0], [0]), 'expected [0]');
// console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]), 'expected [8,9,9,9,0,0,0,1]');