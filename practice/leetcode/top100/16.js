// Best solution:
// https://leetcode.com/problems/reverse-linked-list/discuss/313728/Javascript-ES6-less-code-solution
// Learn about JS ^ ES6
var reverseList2 = function(head) {
    let [prev, current] = [null, head]
    while(current) {
        [current.next, prev, current] = [prev, current, current.next]
    }
    return prev
}
// My solution: 
/*
* Definition for singly-linked list.
* function ListNode(val, next) {
*     this.val = (val===undefined ? 0 : val)
*     this.next = (next===undefined ? null : next)
* }
*/
 function reverseList(head) {
    let prev = null;
    let next = null;
    
    while (head != null) { 
        next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev
};

// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Example 2:
// Input: head = [1,2]
// Output: [2,1]

// Example 3:
// Input: head = []
// Output: []
 
// Constraints:
// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000

// 206. Reverse Linked List
// https://leetcode.com/problems/reverse-linked-list/
// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?