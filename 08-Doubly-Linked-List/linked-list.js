class Node {
    constructor (val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor () {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push (val) {
        const node = new Node(val);
        if (this.head === null) {
            this.head = this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }

        this.length++;
        return this;
    }
}

const list = new DoublyLinkedList();
