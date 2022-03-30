// My solution: 
/*
* Definition for singly-linked list.
* function ListNode(val, next) {
*     this.val = (val===undefined ? 0 : val)
*     this.next = (next===undefined ? null : next)
* }
*/

var diameterOfBinaryTree = function(root) {
    let diameter = 0;

    findDiameters(root);

    return diameter

    function findDiameters(node) {
        if (!node) return 0
    
        let left = findDiameters(node.left);
        let right = findDiameters(node.right);
    
        diameter = Math.max(diameter, left + right)
    
        return 1 + Math.max(left, right)
    }
};

test1 = [1,2,3,4,5]
expected1 = 3
// 3 is the length of the path [4,2,1,3] or [5,2,1,3].
test2 = [1,2]
expected2 = 1

// 543. Diameter of Binary Tree
// https://leetcode.com/problems/diameter-of-binary-tree/
// Given the root of a binary tree, return the length of the diameter of the tree.
// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.
// The length of a path between two nodes is represented by the number of edges between them.

// Constraints:
// The number of nodes in the tree is in the range [1, 104].
// -100 <= Node.val <= 100