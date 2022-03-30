// Summary
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/discuss/1164542/JS-Python-Java-C%2B%2B-or-Easy-Two-Pointer-Solution-w-Explanation
// Notion of giving fast a head start of n. 
// That way it reaches the end at the same time as slow reaches n.

var removeNthFromEnd = function(head, n) {
    let fast = head, slow = head;

    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }
    if (!fast) return head.next

    while (fast.next) {
        fast = fast.next, slow = slow.next;
    } 
    slow.next = slow.next.next;

    return head
};

// Example 1:
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:
// Input: head = [1], n = 1
// Output: []
// Example 3:
// Input: head = [1,2], n = 1
// Output: [1]

// 19. Remove Nth Node From End of List
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/
// Given the head of a linked list, remove the nth node from the end of the list and return its head.
 
// Constraints:
// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz
 
// Follow up: Could you do this in one pass?