# Best solution:
# recursively    
def mergeTwoLists2(self, l1, l2):
    if not l1 or not l2:
        return l1 or l2
    if l1.val < l2.val:
        l1.next = self.mergeTwoLists(l1.next, l2)
        return l1
    else:
        l2.next = self.mergeTwoLists(l1, l2.next)
        return l2


# My simple solution: 
# Runtime: 28 ms, faster than 98.96% of Python3 online submissions for Merge Two Sorted Lists.
# Memory Usage: 13.9 MB, less than 97.39% of Python3 online submissions for Merge Two Sorted Lists.

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def mergeTwoLists(list1, list2):
        if not list1 and not list2:
            return None
        else:
            head = ListNode()
            current = head
            while (list1) and (list2):
                if list1.val <= list2.val:
                    current.val = list1.val
                    list1 = list1.next
                else: 
                    current.val = list2.val
                    list2 = list2.next
                    
                current.next = ListNode()
                current = current.next

            if not list2:
                current.val = list1.val
                current.next = list1.next 
            else:
                current.val = list2.val
                current.next = list2.next
            return head
                
            
test1 = ([1,2,4], [1,3,4])
expected1 = [1,1,2,3,4,4]
test2 = ([], [])
expected2 = []
test3 = ([], [0])
expected3 = [0]
 
print(f"twoSum{test1[0], test1[1]} yields: {Solution.mergeTwoLists(test1[0], test1[1])}. Expected: {expected1}")
print(f"twoSum{test2[0], test2[1]} yields: {Solution.mergeTwoLists(test2[0], test2[1])}. Expected: {expected1}")
print(f"twoSum{test3[0], test3[1]} yields: {Solution.mergeTwoLists(test3[0], test3[1])}. Expected: {expected1}")


# 21. Merge Two Sorted Lists
# https://leetcode.com/problems/merge-two-sorted-lists/

# You are given the heads of two sorted linked lists list1 and list2.
# Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
# Return the head of the merged linked list.

# Constraints:
# The number of nodes in both lists is in the range [0, 50].
# -100 <= Node.val <= 100
# Both list1 and list2 are sorted in non-decreasing order.

