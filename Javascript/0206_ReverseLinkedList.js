// Given the head of a singly linked list, reverse the list, and return the reversed list.


// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// recursion reverseList
var reverseListRecursive = function (head) {
    // base case
    if (!head || !head.next) return head;

    // recursion
    let output = reverseListRecursive(head.next)
    let runner = output;
    while (runner.next) runner = runner.next;
    runner.next = new ListNode(head.val)
    return output;
};

// iterative reverseList
var reverseList = function (head) {
    let temp = null;
    let output = null;

    // while loop moves down head list, and adds the head to the top of the output on every iteration
    while (head) {
        temp = head.next;       // temp holds next node, to set head for next iteration
        head.next = output;     // head.next is set to the output list
        output = head           // output is updated to include new "head"
        head = temp             // finally, head is reset to the temp node
    }
    return output
}

console.log(reverseList(
    new ListNode(0,
        new ListNode(1,
            new ListNode(4,
                new ListNode(-2))))))