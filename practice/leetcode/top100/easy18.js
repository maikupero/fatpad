// Best solution:
// https://leetcode.com/problems/palindrome-linked-list/discuss/1137027/JS-Python-Java-C%2B%2B-or-Easy-Floyd's-%2B-Reversal-Solution-w-Explanation

// My solution: 
/**
* Definition for singly-linked list.
* function ListNode(val, next) {
*     this.val = (val===undefined ? 0 : val)
*     this.next = (next===undefined ? null : next)
* }
*/

 var isPalindrome = function(head) {

    let slow = head, fast = head, prev, temp

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    prev = slow, slow = slow.next, prev.next = null

    while (slow) {
        temp = slow.next
        slow.next = prev
        prev = slow
        slow = temp
    }

    fast = head, slow = prev;

    while (slow) {
        if (fast.val !== slow.val) return false
        else fast = fast.next, slow = slow.next
    }

    return true
};

test1 = [1,2,2,1]
expected1 = true
test2 = [1,2]
expected2 = false

// 234. Palindrome Linked List
// https://leetcode.com/problems/palindrome-linked-list/
// Given the head of a singly linked list, return true if it is a palindrome.
