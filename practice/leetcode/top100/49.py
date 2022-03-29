# https://leetcode.com/problems/binary-tree-level-order-traversal/discuss/746422/Binary-tree-level-order-traversal-Python3-Solution-with-a-Detailed-Explanation

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        
        ans = []
        if not root: return ans

        queue = []
        queue.append(root)

        while len(queue) > 0:
            level = []

            for i in range(len(queue)):
                node = queue.pop(0)
                level.append(node.val)

                if node.left != None:
                    queue.append(node.left)
                if node.right != None:
                    queue.append(node.right)
            
            ans.append(level)
        
        return ans

test1 = [3,9,20,null,null,15,7]
expected1 = [[3],[9,20],[15,7]]
test2 = [1]
expected2 = [[1]]
test3 = []
expected3 = []
 


print(f"Testing {test1} returns {Solution.levelOrder(test1)} expected {expected1}")
print(f"Testing {test2} returns {Solution.levelOrder(test2)} expected {expected2}")
print(f"Testing {test3} returns {Solution.levelOrder(test3)} expected {expected3}")

# 102. Binary Tree Level Order Traversal
# https://leetcode.com/problems/binary-tree-level-order-traversal/
# Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

# Constraints:
# The number of nodes in the tree is in the range [0, 2000].
# -1000 <= Node.val <= 1000