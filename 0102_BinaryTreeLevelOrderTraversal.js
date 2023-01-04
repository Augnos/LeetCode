// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

/**
Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    // returns empty array if root is null
    if (!root) return [];

    let queue = [root];
    let output = [];

    while (queue.length) {
        // create an array to hold current queue's values
        let currValues = []

        for (i = queue.length; i > 0; i--) {
                let node = queue.shift();

                // push values to currValues
                currValues.push(node.val);
                
                // push children to queue
                if (node.left) queue.push(node.left)
                if (node.right) queue.push(node.right)
        }

        // push currValues to output
        output.push(currValues);
    }

    return output;
};

example1 = new TreeNode(3,
    new TreeNode(9),
    new TreeNode(20,
        new TreeNode(15),
        new TreeNode(7)))

console.log(levelOrder(example1))
console.log(levelOrder(new TreeNode(1)))
console.log(levelOrder())
