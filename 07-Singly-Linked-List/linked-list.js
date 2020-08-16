class Node {
    constructor (val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
}

const list = new SinglyLinkedList();
list.push('Aditya');
list.push('Nishi');
list.push('John');
list.push('Jane');
list.push('Avi');
