// https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
 var serialize = function(root) {
    let data = [];
    
    function checkNode(node) {
        if (node == null) {
            data.push(null);
            return;
        } 
        data.push(node.val);
        checkNode(node.left);
        checkNode(node.right);
    }
    
    checkNode(root);
    console.log(data);
    return data
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (!data.length) return;
    
    function buildTree() { 
        let val = data.shift();
        if (val == null) return null
        
        let node = new TreeNode(val);
        node.left = buildTree();
        node.right = buildTree();
        return node;
    }
    
    return buildTree();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */