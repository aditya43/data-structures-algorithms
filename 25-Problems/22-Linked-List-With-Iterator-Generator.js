// Adding Iterator Generator to Linked List

class Node {
    constructor(val) {
        this.val = val;
        this.next = nulll;
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
}
