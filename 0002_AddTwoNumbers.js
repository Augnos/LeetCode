// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var addTwoNumbers = function (l1, l2) {
    let r1 = l1;
    let r2 = l2;
    console.log("This is r1 before additions");
    console.log(r1);

    r1.val += r2.val;

    while (r1.next && r2.next) {
        r1 = r1.next;
        r2 = r2.next;
        r1.val += r2.val;
    }

    while (r2.next) {
        r1.next = new ListNode(0);
        r1 = r1.next;
        r2 = r2.next;
        r1.val += r2.val;
    }

    console.log("This is r1 after additions");
    console.log(r1);
    r1 = l1;
    while (r1) {
        // if value contains more than 1 digit, it will be carried to the next node.
        if (r1.val > 9) {
            if (r1.next == null) r1.next = new ListNode(0);

            // move extra digits to the next node
            r1.next.val += (r1.val - (r1.val % 10)) / 10;
            // keep the mod10 for the current node
            r1.val = r1.val % 10;
        }
        // advance while loop to check the next node
        r1 = r1.next;
    }

    return l1;
};

test1 = new ListNode(43);
test2 = new ListNode(9);

console.log(addTwoNumbers(test1, test2));