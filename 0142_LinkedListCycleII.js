// Given the head of a linked list, return the node where the cycle begins. 
// If there is no cycle, return null.
// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. 
// Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). 
// It is -1 if there is no cycle. 
// Note that pos is not passed as a parameter.
// Do not modify the linked list.


// Definition for singly - linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    let slow = head, fast = head;

    // while loop will break if cycle doesn't exist.
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        // when loop is detected, begin searching for cycle start node
        if (slow === fast) {
            // our comparison lists for finding the cycle start:
            // headA: head -> * -> tail
            // headB: tail.next -> * -> tail (one cycle)

            // declaring variables
            let tail = slow;
            let headA = head;
            let headB = tail.next;
            let aCount = 0, bCount = 0;

            // edge cases
            if (head === tail) return head;
            if (tail.next === tail) return tail;

            // declare runner, and increment count for headA list
            let runner = headA;
            while (runner !== tail) {
                aCount++;
                runner = runner.next;
            }

            // redeclare runner, and increment count for headB list
            runner = headB;
            while (runner !== tail) {
                bCount++;
                runner = runner.next;
            }

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

        }
    }
    return null;
};