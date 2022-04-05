// Best solution
// https://leetcode.com/problems/flatten-binary-tree-to-linked-list/discuss/1207642/JS-Python-Java-C%2B%2B-or-Simple-O(1)-Space-and-Recursive-Solutions-w-Explanation
// Can do morris traversal or O(1) space. I thought I'd do recursion, but morris traversal is the most intuitive for me.

// The approach is called the Morris traversal. 
// At its heart, it takes advantage of the basic nature of ordered traversals to iterate through and unwind the tree. 
// In a pre-order traversal of a binary tree, each vertex is processed in (node, left, right) order. 
// This means that the entire left subtree could be placed between the node and its right subtree.
// To do this, however, we'll first have to locate the last node in the left subtree. 
// This is easy enough, since we know that the last node of a pre-order tree can be found by moving right as many times as possible from its root.
// So we should be able to move through the binary tree, keeping track of the curent node (curr). 
// Whenever we find a left subtree, we can dispatch a runner to find its last node, 
// then stitch together both ends of the left subtree into the right path of curr, taking heed to sever the left connection at curr.
// Once that's done, we can continue to move curr to the right, looking for the next left subtree. When curr can no longer move right, the tree will be successfully flattened.

// Time Complexity: O(N) where N is the number of nodes in the binary tree
// Space Complexity: O(1)

// Recursive Approach:
// In order to properly connect the linked list, we'll need to start at the bottom and work up. 
// This means that we'll need to move in reverse pre-order traversal order through the binary tree. 
// Since pre-order traversal is normally "node, left, right", we'll have to move in the reverse order of "right, left, node".
// Binary tree traversal is prime ground for a recursive solution, so let's define a helper (revPreOrder) for the purpose. 
// We'll also keep a global variable head to keep track of the head of the linked list as we work our way backwards.
// Per our reverse pre-order traversal approach, we want to recursively work down the right path first then the left path, if they exist. 
// Once we've flattened the left and right paths recursively, head should at this point be equal to the next node after the current one, 
// so we should set it as node.right. 
// We shouldn't forget to set node.left to null, as well.
// Once we're done with the current node, we can update head to node and allow the recursion to complete and move back up to the next layer. 
// Once the recursion stack is exhausted, head will be equal to root again.
// Lastly, we have to deal with an edge case of an empty root, 
// so we can just make sure to only call the initial recursion on root if root actually is a node. 
// There is no need for a return statement, because the test suite will evaluate root directly.

// Time Complexity: O(N) where N is the number of nodes in the binary tree
// Space Complexity: O(N) for the recursion stack, which is as long as the maximum depth of the binary tree, which can go up to N


/*
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 *
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

// We need to go reverse order on the left side of the tree only. 
// So traverse down the rightmost path on root.left
// attach current root.right to move's .right, point root.right at move's .val


function flatten(root) {
    let curr = root;
    while (curr) {
        if (curr.left) {
            let runner = curr.left;
            while (runner.right) runner = runner.right;
            runner.right = curr.right, curr.right = curr.left, curr.left = null
        }
        curr = curr.right;
    }
};

function flattenRecursive(root) {

    const revPreOrder = node => {
        if (node.right) revPreOrder(node.right)
        if (node.left) revPreOrder(node.left)
        node.left = null, node.right = head, head = node
    }
    if (root) revPreOrder (root)
};

test1 = [1,2,5,3,4,null,6]
expected1 = [1,null,2,null,3,null,4,null,5,null,6]
test2 = []
expected2 = []
test3 = [0]
expected3 = [0]
 

console.log(`||| TESTED with target ${test1} \n||| RETURNS: ${countBits(test1)}\n||| EXPECTED: ${expected1}`)
console.log(`||| TESTED with target ${test2} \n||| RETURNS: ${countBits(test2)}\n||| EXPECTED: ${expected2}`)
console.log(`||| TESTED with target ${test3} \n||| RETURNS: ${countBits(test3)}\n||| EXPECTED: ${expected3}`)

// 114. Flatten Binary Tree to Linked List
// https://leetcode.com/problems/flatten-binary-tree-to-linked-list/
// Given the root of a binary tree, flatten the tree into a "linked list":
// The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null.
// The "linked list" should be in the same order as a pre-order traversal of the binary tree.

// Constraints:
// The number of nodes in the tree is in the range [0, 2000].
// -100 <= Node.val <= 100
 
// Follow up: Can you flatten the tree in-place (with O(1) extra space)?