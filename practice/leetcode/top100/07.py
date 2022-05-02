# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:

    # Best solution:
        # recursively
    def inorderTraversal1(self, root):
        res = []
        self.helper(root, res)
        return res
        
    def helper(self, root, res):
        if root:
            self.helper(root.left, res)
            res.append(root.val)
            self.helper(root.right, res)

        # iteratively       
    def inorderTraversal(self, root):
        res, stack = [], []
        while True:
            while root:
                stack.append(root)
                root = root.left
            if not stack:
                return res
            node = stack.pop()
            res.append(node.val)
            root = node.right

    # My solution: 
    def inorderTraversal(root):
        # Apparently there is no need for current. Just go with root.
        current = root
        # Could have done stack, inorder = []
        stack = []
        inorder = []

        while True:
            # Could have done while current:
            if current is not None:
                stack.append(current)
                current = current.left
            elif(stack):
                current = stack.pop()
                inorder.append(current.val)
                current = current.right
            else:
                break
        
        return inorder

# Examples
test1 = [1,null,2,3]
expected1 = [1,3,2]
test2 = []
expected2 = []
test3 = [1]
expected3 = [1]

print(f"inorderTraversal{test1} yields: {Solution.inorderTraversal(test1)}. Expected: {expected1}")
print(f"inorderTraversal{test2} yields: {Solution.inorderTraversal(test2)}. Expected: {expected2}")
print(f"inorderTraversal{test3} yields: {Solution.inorderTraversal(test3)}. Expected: {expected3}")

# 94. Binary Tree Inorder Traversal
# https://leetcode.com/problems/binary-tree-inorder-traversal/
# Given the root of a binary tree, return the inorder traversal of its nodes' values.

# Constraints:
# The number of nodes in the tree is in the range [0, 100].
# -100 <= Node.val <= 100