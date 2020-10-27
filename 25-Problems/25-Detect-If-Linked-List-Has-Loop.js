// Detect if linkedlist has a loop
const LinkedList = require('./Data-Structures/01-Linked-List');

function checkLoop(list) {
    if (!list.head) {
        return false;
    }

    let slow = list.head;
    let fast = list.head;

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true; // loop detected
        }
    }

    return false; // No loop in linkedlist
}

const l1 = new LinkedList();
l1.add(1).add(2).add(3).add(4);
l1.getNodeAt(4).next = l1.getNodeAt(2); // Created loop

const l2 = new LinkedList();
l2.add(1).add(2).add(3).add(4);

console.log(checkLoop(l1)); // true
console.log(checkLoop(l2)); // false
