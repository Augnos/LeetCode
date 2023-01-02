// Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.


// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    // declaring middle as head, for null and single node linked lists
    let middle = head;

    // variable "even" is used to move middle node down ever even iteration in list
    // assumed false at start, if head is a single-node list
    let even = false;

    head = head.next;
    while (head) {
        // even flips between true and false every iteration
        even = !even;
        // when even is true, middle moves to next node
        // middle will always be on 2nd node if there are 2 middle nodes
        if (even) {
            middle = middle.next;
        }
        // head moves to next node every iteration
        head = head.next;
    }

    return middle;
};