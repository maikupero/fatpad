// Best solution:
// Python, but fascinating
// def hasCycle(self, head):
//     try:
//     slow = head
//     fast = head.next
//     while slow is not fast:
//         slow = slow.next
//         fast = fast.next.next
//     return True
//     except:
//     return False

// My solution:
/*
* Definition for singly-linked list.
* function ListNode(val) {
*     this.val = val;
*     this.next = null;
* }
*/
 var hasCycle = function(head) {
    temp = head;
    while (temp) {  
        if (temp.passed === true) {
            return true
        }
        temp.passed = true;
        temp = temp.next;
    }
    return false    
};

// Examples

// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.


// 141. Linked List Cycle
// Given head, the head of a linked list, determine if the linked list has a cycle in it.
// There is a cycle in a linked list if there is some node in the list that can be reached again 
// by continuously following the next pointer. Internally, pos is used to denote the index of the node 
// that tail's next pointer is connected to. Note that pos is not passed as a parameter.
// Return true if there is a cycle in the linked list. Otherwise, return false.
// https://leetcode.com/problems/linked-list-cycle/

// Constraints:
// The number of the nodes in the list is in the range [0, 104].
// -105 <= Node.val <= 105
// pos is -1 or a valid index in the linked-list.

// Follow up: Can you solve it using O(1) (i.e. constant) memory?
