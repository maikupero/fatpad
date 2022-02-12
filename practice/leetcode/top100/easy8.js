// Best solution:
var isSymmetric = function(root) {
    if (!root) { // Sanity check
        return true;
    }

    // Check if tree s & t are mirroring each other
    function isMirror(s, t) {
        if (!s && !t) {
            return true; // Both nodes are null, ok
        }
        if (!s || !t || s.val !== t.val) {
            return false; // Found a mismatch
        }
        // Compare the left subtree of `s` with the right subtree of `t`
        // and the right subtree of `s` with the left subtree of `t`
        return isMirror(s.left, t.right) && isMirror(s.right, t.left);
    }

    return isMirror(root.left, root.right);
};


// My simple solution

var isSymmetric = function(root) {
    // Need a left traversal and right traversal. 
    // Traverse in opposite directions and compare values. 
    // If at any point there's no match, return false.
    // Return true
    let b = root;
    let rootstack = [];
    let bstack = [];

    while (true) {
        while (root) {
            if ((!b && root) || (b && !root)) {
                return false
            }
            if (b && root) {
                if (b.val != root.val) {
                    return false
                }
            }
            rootstack.push(root);
            root = root.left;
            bstack.push(b);
            b = b.right;
        }

        if (rootstack.length === 0 || bstack.length === 0) {
            return true
        }

        let node = rootstack.pop();
        root = node.right;
        node = bstack.pop();
        b = node.left;
    }
}
// Given Examples
// Example 1:
// Input: root = [1,2,2,3,4,4,3]
// Output: true

// Example 2:
// Input: root = [1,2,2,null,3,null,3]
// Output: false
 
// Constraints:
// The number of nodes in the tree is in the range [1, 1000].
// -100 <= Node.val <= 100

// Failed test cases


// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
// Follow up: Could you solve it both recursively and iteratively?


