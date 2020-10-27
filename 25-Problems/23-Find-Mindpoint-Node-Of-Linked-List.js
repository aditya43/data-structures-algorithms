// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

const LinkedList = require('./Data-Structures/01-Linked-List');

function midPoint(ll) {
    let slow = ll.head;
    let fast = ll.head;

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

const ll = new LinkedList();
ll.add(1)
    .add(2)
    .add(3)
    .add(4)
    .add(5)
    .add(6)
    .add(7)
    .add(8)
    .add(9)
    .add(10)
    .add(11)
    .add(12)
    .add(13)
    .add(14)
    .add(15)
    .add(16)
    .add(17)
    .add(18)
    .add(19)
    .add(20);

console.log(midPoint(ll));
