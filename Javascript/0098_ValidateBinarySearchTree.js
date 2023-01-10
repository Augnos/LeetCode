// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root, lower = -Infinity, upper = Infinity) {
    // base case

    // if no children, return true
    if (!root.left && !root.right) return true;

    // if left/right child exists, verify if out of range
    if (root.left != null && (lower >= root.left.val || root.left.val >= root.val)) return false;
    if (root.right != null && (root.val >= root.right.val || root.right.val >= upper)) return false;

    // recurse for children and get results as left and right
    let left = new Boolean();
    let right = new Boolean();
    if (root.left) left = isValidBST(root.left, lower, root.val);
    if (root.right) right = isValidBST(root.right, root.val, upper);

    // if either child is false, return false, else return true
    if (!left || !right) return false;
    else return true;
};

let example1 = new TreeNode(2, new TreeNode(1), new TreeNode(3));
let example2 = new TreeNode(5, new TreeNode(1), new TreeNode(4, new TreeNode(3), new TreeNode(6)));
let example3 = new TreeNode(0, new TreeNode(-1));

console.log(isValidBST(example1));
console.log(isValidBST(example2));
console.log(isValidBST(example3));