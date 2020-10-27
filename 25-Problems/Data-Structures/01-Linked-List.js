class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = this.tail = null;
    }

    add(val) {
        const node = new Node(val);

        if (!this.head) {
            this.head = this.tail = node;
            return this;
        }

        this.tail.next = node;
        this.tail = node;
        return this;
    }

    remove() {
        const node = this.head;

        if (!this.head || !this.head.next) {
            this.head = this.tail = null;
        } else {
            this.head = this.head.next;
        }

        return node;
    }
}

module.exports = LinkedList;
