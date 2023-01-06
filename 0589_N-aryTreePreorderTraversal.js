// Given the root of an n-ary tree, return the preorder traversal of its nodes' values.
// Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)


// Definition for a Node.
function Node(val, children) {
    this.val = val;
    this.children = children;
};


/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorderRecursive = function (root, output = []) {
    // base case
    if (root.children[0] == null) {
        output.push(root.val);
        return output;
    }

    // recursion
    else {
        output.push(root.val);
        root.children.forEach(child => {
            preorder(child, output)
        });
        return output;
    }
};

var preorder = function (root) {
    // returns empty array if root is null
    if (!root) return [];

    let stack = [root];
    let output = [];

    let top;
    while (stack[0]) {
        // take top of stack and push val to output array
        top = stack.pop();
        output.push(top.val);

        // push children to stack in reverse order
        top.children.reverse().forEach(child => {
            stack.push(child)
        });
    }

    return output;
}

console.log(preorder(
    new Node(1, [
        new Node(3, [
            new Node(5, []),
            new Node(6, [])
        ]),
        new Node(2, []),
        new Node(4, [])
    ])))