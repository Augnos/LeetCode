// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect.
// If the two linked lists have no intersection at all, return null.
// The test cases are generated such that there are no cycles anywhere in the entire linked structure.


// Definition for singly - linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    // declare list length variables
    let aCount = 0, bCount = 0;

    // declare runner, and increment count for headA list
    let runner = headA;
    while (runner) {
        aCount++;
        runner = runner.next;
    }

    // redeclare runner, and increment count for headB list
    runner = headB;
    while (runner) {
        bCount++;
        runner = runner.next;
    }

    // if either length is 0, return null
    if (aCount === 0 || bCount === 0) return null;

    // while the lengths mismatch, truncate the head of the longer list
    while (aCount != bCount) {
        if (aCount > bCount) {
            headA = headA.next;
            aCount--;
        }
        if (aCount < bCount) {
            headB = headB.next;
            bCount--;
        }
    }

    // compare the lists one node at a time
    // the first matching node is where lists intersect
    while (headA && headB) {
        if (headA === headB) return headA;
        headA = headA.next
        headB = headB.next
    }

    // if lists never intersect, return null
    return null;
};