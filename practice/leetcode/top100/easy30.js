// Summary
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/discuss/1164542/JS-Python-Java-C%2B%2B-or-Easy-Two-Pointer-Solution-w-Explanation
// Notion of giving fast a head start of n. 
// That way it reaches the end at the same time as slow reaches n.
var swapPairs = function(head) {
    if (!head || !head.next) return head

    let a = head, b = head.next, c = b.next;
    b.next = a;
    a.next = swapPairs(c)
    return b
};

// Example 1:
// Input: head = [1,2,3,4]
// Output: [2,1,4,3]
// Example 2:
// Input: head = []
// Output: []
// Example 3:
// Input: head = [1]
// Output: [1]

// 24. Swap Nodes in Pairs
// https://leetcode.com/problems/swap-nodes-in-pairs/
// Given a linked list, swap every two adjacent nodes and return its head. 
// You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

// Constraints:
// The number of nodes in the list is in the range [0, 100].
// 0 <= Node.val <= 100