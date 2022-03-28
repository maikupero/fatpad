/*
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/*
 * @param {TreeNode} root
 * @return {boolean}
 */

// Best solution
var isValidBST = function(root, min=null, max=null) {
    if (!root) return true;
    if ((min) && (root.val <= min.val)) return false;
    if ((max) && (root.val >= max.val)) return false;
    return isValidBST(root.left, min, root) && isValidBST(root.right, root, max);
};

// My first attempt
// Close! But I needed to check
 var isValidBST = function(root) {
    if (!root) return true
    
    if ( (root.val <= root.left) || (root.val >= root.right) ) return false
    return isValidBST(root.left) && isValid(root.right)
};




test1 = [2,1,3]
expected1 = true
test2 = [5,1,4,null,null,3,6]
expected2 = false
// Explanation: The root node's value is 5 but its right child's value is 4.
 

 
console.log(`||| TESTED with target ${board1, word1} \n||| RETURNS: ${exist(board1, word1)}\n||| EXPECTED: ${expected1}`)
console.log(`||| TESTED with target ${board2, word2} \n||| RETURNS: ${exist(board2, word2)}\n||| EXPECTED: ${expected2}`)
console.log(`||| TESTED with target ${board3, word3} \n||| RETURNS: ${exist(board3, word3)}\n||| EXPECTED: ${expected3}`)

// 98. Validate Binary Search Tree
// https://leetcode.com/problems/validate-binary-search-tree/
// Given the root of a binary tree, determine if it is a valid binary search tree (BST).
// A valid BST is defined as follows:
// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// Constraints:
// The number of nodes in the tree is in the range [1, 104].
// -231 <= Node.val <= 231 - 1 solution faster with a larger board?