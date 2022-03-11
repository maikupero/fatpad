// Best solution:

// My solution: 
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
 var addTwoNumbers = function(l1, l2) {
    let end = new ListNode();
    let head = end;
    let carried = 0;
    let sum = 0;
    
    while (l1 || l2 || sum > 0) {
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2!==null) {
            sum += l2.val;
            l2 = l2.next;
        }

        if (sum > 9) {
            carried = 1;
            sum -= 10
        } else carried = 0;
        
        head.next = new ListNode(sum);
        head = head.next;
        sum = carried;
    }

    return end.next
};

test1a = [2,4,3], 
test1b = [5,6,4]
expected1 = [7,0,8]
// Explanation: 342 + 465 = 807

test2a = [0]
test2b = [0]
expected2 = [0]

test3a = [9,9,9,9,9,9,9]
test3b = [9,9,9,9]
expected3 = [8,9,9,9,0,0,0,1]
 

// 2. Add Two Numbers
// https://leetcode.com/problems/add-two-numbers/
// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order, and each of their nodes contains a single digit. 
// Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Constraints:
// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.