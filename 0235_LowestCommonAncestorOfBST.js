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
    let ancestor = root;

    while (true) {
        // if ancestor matches p or q node, return that node
        if (ancestor == p || ancestor == q) return ancestor;

        // if p and q are both less than ancestor, ancestor becomes its left child
        if (p.val < ancestor.val && q.val < ancestor.val) ancestor = ancestor.left;

        // else if p and q are both greater than ancestor, ancestor becomes its left child
        else if (p.val > ancestor.val && q.val > ancestor.val) ancestor = ancestor.right;

        // else if children diverge, ancestor is the lowest common ancestor, and is returned
        else return ancestor;
    }
};