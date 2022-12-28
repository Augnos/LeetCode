// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var addTwoNumbers = function (l1, l2) {
    // if any list is empty, return the other list
    if (!l1.val && !l1.next) return l2;
    if (!l2.val && !l2.next) return l1;
    
    // set runners of l1 and l2 as r1 and r2
    let r1 = l1;
    let r2 = l2;

    // This while loop sums the values of both runners
    while (r1 && r2) {
        // r2 is added to r1 value
        r1.val += r2.val;

        // if r1 value contains more than 1 digit, it will be carried to the next node.
        if (r1.val > 9) {
            if (r1.next == null) r1.next = new ListNode(0);

            // move extra digits to the next node
            r1.next.val += (r1.val - (r1.val % 10)) / 10;
            // convert current node value to single digit
            r1.val = r1.val % 10;
        }

        // if r1.next is null, but r2.next exists, swap them
        if (!r1.next && r2.next) [r1.next, r2.next] = [r2.next, r1.next];

        // iterate both runners
        r1 = r1.next;
        r2 = r2.next;
    }

    while (r1) {
        // if value contains more than 1 digit, it will be carried to the next node.
        if (r1.val > 9) {
            if (r1.next == null) r1.next = new ListNode(0);

            // move extra digits to the next node
            r1.next.val += (r1.val - (r1.val % 10)) / 10;
            // convert current node value to single digit
            r1.val = r1.val % 10;
        }
        // next node will be checked if exists
        r1 = r1.next;
    }

    // return l1 as our final summed linked list
    return l1;
};

test1 = new ListNode(253);
test2 = new ListNode(463);

console.log(addTwoNumbers(test1, test2));