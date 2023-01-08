// Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

// According to the definition of LCA on Wikipedia: 
// “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants
// (where we allow a node to be a descendant of itself).”

/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    while (true) {
        // if p and q are both less than root, root becomes its left child
        if (p.val < root.val && q.val < root.val) root = root.left;

        // else if p and q are both greater than root, root becomes its right child
        else if (p.val > root.val && q.val > root.val) root = root.right;

        // else if children diverge, root is the lowest common ancestor, and is returned
        else return root;
    }
};