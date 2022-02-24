# Summary: 
    # If both sides exist, Start a new tree, 
    # recursively iterate through either side creating a new node and merging values as we go.
    # Else statement to return just one side if the other is null.
    
# Definition for a binary tree node.
class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution(object):
    # My solution
    def mergeTrees(self, root1, root2):
        if root1 and root2:
            merged = TreeNode(root1.val + root2.val)
            merged.left = self.mergeTrees(root1.left, root2.left)
            merged.right = self.mergeTrees(root1.right, root2.right)

            return merged

        else:
            return root1 or root2
        
test1a = [1,3,2,5]
test1b = [2,1,3,None,4,None,7]
expected1 = [3,4,5,5,4,None,7]
test2a = [1]
test2b = [1,2]
expected2 = [2,2]
 
# 617. Merge Two Binary Trees
# https://leetcode.com/problems/merge-two-binary-trees/
# You are given two binary trees root1 and root2.
# Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. 
# You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, 
# then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.
# Return the merged tree.
# Note: The merging process must start from the root nodes of both trees.
 
# Constraints:
# The number of nodes in both trees is in the range [0, 2000].
# -104 <= Node.val <= 104