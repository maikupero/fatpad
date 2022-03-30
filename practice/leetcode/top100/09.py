# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:

    # Best solution:
    def maxDepth(self, root: TreeNode) -> int:
        if not root:
            return 0
        return max(self.maxDepth(root.left), self.maxDepth(root.right)) + 1

    # My solution: 
    def maxDepth(root):
        counts = []
        count = 1
        Solution.findpaths(root, counts, count)
        return max(counts)

    def findpaths(root, counts, count):
        if not root:
            counts.append(count-1)
            return
        Solution.findpaths(root.left, counts, count+1)
        Solution.findpaths(root.right, counts, count+1)

# Example 1:
# Input: root = [3,9,20,null,null,15,7]
# Output: 3
# Example 2:
# Input: root = [1,null,2]
# Output: 2

# 104. Maximum Depth of Binary Tree
# https://leetcode.com/problems/maximum-depth-of-binary-tree/
# Given the root of a binary tree, return its maximum depth.
# A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

# Constraints:
# The number of nodes in the tree is in the range [0, 104].
# -100 <= Node.val <= 100