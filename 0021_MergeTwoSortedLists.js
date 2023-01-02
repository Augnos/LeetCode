// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.


// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */


var mergeTwoLists = function (list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;
    
    let newList = new ListNode();
    let l1 = list1, l2 = list2;
    if (list1.val <= list2.val) {
        newList = list1;
        l1 = l1.next;
    } else {
        newList = list2
        l2 = l2.next;
    }

    let runner = newList;

    while (l1 || l2) {
        if (!l1) {
            runner.next = l2;
            l2 = l2.next;
            runner = runner.next;
            continue;
        }
        if (!l2) {
            runner.next = l1;
            l1 = l1.next;
            runner = runner.next;
            continue;
        }

        if (l1.val <= l2.val) {
            runner.next = l1;
            l1 = l1.next;
            runner = runner.next;
        } else {
            runner.next = l2;
            l2 = l2.next;
            runner = runner.next;
        }

    }
    return newList;
};

console.log(mergeTwoLists(
    new ListNode(1, new ListNode(2, new ListNode(4))),
    new ListNode(1, new ListNode(3, new ListNode(4)))
))
console.log(mergeTwoLists(,))