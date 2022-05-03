// https://leetcode.com/problems/balanced-binary-tree/

// https://leetcode.com/problems/binary-tree-inorder-traversal/
// results array, initialize recursive function, return results.
var inorderTraversal = function(root) {
    let res = [];
    traverse(root, res);
    return res
};

// Till no root is present, recursively call the left side, push each val, recursively call the rights.
function traverse(root, res) {
    if (root) {
        traverse(root.left, res);
        res.push(root.val)
        traverse(root.right, res);
    }
}