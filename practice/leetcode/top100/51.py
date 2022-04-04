# https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/discuss/981152/Recursion-or-Explanation-%2B-Visuals-or-Python
# preorder traversal provides us with the placement of the root
# inorder traversal provides us with the placement of the left and right children
# The reason we are given two types of binary tree traversals is because it is not possible to construct binary tree from a single traversal.
    # These two different trees have the same preorder traversal but are not the same tree because they have a different structure
#       7               7
#         8           8
#           9       9
    # These two different trees have the same inorder traversal but are not the same tree because they have a different structure.

# the root of the subtree will always be the first element in preorder.
# to construct the left subtree, we take all the nodes to the left of the root value (from inorder)
# to construct the right subtree, we take all the nodes to the right of the root (from inoder)


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def buildTree(preorder: list, inorder: list):
        
        # base cases
        if not preorder or not inorder:
            return None
        if len(preorder) == 1:
            # return root
            return TreeNode(preorder[0])

        root = TreeNode(preorder[0])
        root_index = inorder.index(preorder[0])

        root.left = self.buildTree(preorder[1:root_index+1],inorder[:root_index])
        root.right = self.buildTree(preorder[root_index+1:],inorder[root_index+1:])

        return root


# Example 1:
#        3
#    9       20
#          15   7

# Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
# Output: [3,9,20,null,null,15,7]

# Example 2:
# Input: preorder = [-1], inorder = [-1]
# Output: [-1]
 
# 105. Construct Binary Tree from Preorder and Inorder Traversal
# https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
# Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

# Constraints:
# 1 <= preorder.length <= 3000
# inorder.length == preorder.length
# -3000 <= preorder[i], inorder[i] <= 3000
# preorder and inorder consist of unique values.
# Each value of inorder also appears in preorder.
# preorder is guaranteed to be the preorder traversal of the tree.
# inorder is guaranteed to be the inorder traversal of the tree.