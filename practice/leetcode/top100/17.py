# Summary: 
    # Set base case of none, otherwise, swap then return same function on either non-None side.
    # swap, then go left, swap, then go left. when None, goes back through the rights. repeat.

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    # Best Solutions
    def invertTree3(root):
        if root:
            root.left, root.right = self.invertTree(root.right), self.invertTree(root.left)
            return root

    def invertTree2(root):
        if not root: 
            return None
        root.left, root.right = self.invertTree(root.right), self.invertTree(root.left)

        return root

    # My solution
    def invertTree(root):
        if not root:
            return None
        
        root.left, root.right = root.right, root.left

        if root.left:
            self.invertTree(root.left)
        if root.right:
            self.invertTree(root.right)

        return root

        

test1 = [4,2,7,1,3,6,9]
expected1 = [4,7,2,9,6,3,1]

test2 = [2,1,3]
expected2 = [2,3,1]

test3 = []
expected3 = []
 
# 226. Invert Binary Tree
# https://leetcode.com/problems/invert-binary-tree/
# Given the root of a binary tree, invert the tree, and return its root.

# Constraints:
# The number of nodes in the tree is in the range [0, 100].
# -100 <= Node.val <= 100