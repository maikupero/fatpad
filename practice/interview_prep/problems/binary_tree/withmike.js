// https://leetcode.com/problems/count-complete-tree-nodes/


var inorderTraversal = function(root) {
    let count = 0;
    
    function traverse(root) { // res is being passed by Reference
        if (root) {
            traverse(root.left);
            count++;
            traverse(root.right);
        }
    }
    
    traverse(root);
    return count
};

var countNodes = function(root) {
    return recursiveCountByReturn(root);
};

function recursiveCountByReturn(root) {
    if (root == null) return []
    
    let nodesList = [root.val];
    
    let leftNodeList = recursiveCountByReturn(root.left);
    let rightNodeList = recursiveCountByReturn(root.right);
    
    return nodesList.concat(leftNodeList, rightNodeList)
}




var inorderTraversal = function(root) {
    let count = 0;
    
    function traverse(root) { // res is being passed by Reference
        if (root) {
            traverse(root.left);
            count++;
            traverse(root.right);
        }
    }
    
    traverse(root);
    return res
};

// Till no root is present, recursively call the left side, push each val, recursively call the rights.




let count = 0;
recursiveCountByReturn(root, &count); 
return count;

function recursiveCountByReference(root, countNum) {
    if (root.val == null) {
      return;
    }
    
    *countNum++;
    recursiveCountByReference(root.left, countNum);
    recursiveCountByReference(root.right, countNum);
}
            1
           / \
          2   3
         / \ / 
        4  5 6



// countObject is like a LIST

// How this looks called
// Assume CountObject is some persistent object that holds onto edits/mutations

let countObject = {
  val: 0,
};
let count = recursiveCountByReturn(root, countObject);
return CountObject.val;

function recursiveCountByReference(root, countObject) {
    if (root.val == null) {
      return;
    }
    
    countObect.val++;
    recursiveCountByReference(root.left, countObject);
    recursiveCountByReference(root.right, countObject);
}

//     1
//   2   3

// How this looks called
let count = recursiveCountByReturn(root);
return count;

function recursiveCountByReturn(root) {
    if (root.val == null) {
      return 0;
    }
    let count = 0;
    count++;
    count += recursiveCountByReturn(root.left);
    count += recursiveCountByReturn(root.right);
    
    return count;
}
