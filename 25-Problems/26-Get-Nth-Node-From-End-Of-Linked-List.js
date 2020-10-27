// --- Directions
// Given a linked list and integer n, return the element n
// spaces from the last node in the list.  Do not call the
// 'size' method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'
const LinkedList = require('./Data-Structures/01-Linked-List');

function getNthNodeFromEnd(list, places) {
    let slow = list.head;
    let fast = list.head;
    let i = 0;

    while (fast.next && i !== places) {
        fast = fast.next;
        i++;
    }

    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }

    return slow;
}

const ll = new LinkedList();
ll.add(1).add(2).add(3).add(4).add(5).add(6).add(7).add(8).add(9);

console.log(getNthNodeFromEnd(ll, 1));
