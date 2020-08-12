const Node = require('./Node');

class LinkedList {
    constructor () {
        this.head = null;
        this.size = 0;
    }

    add (value) {
        const Item = new Node(value);

        if (this.head === null) {
            this.head = Item;
        } else {
            let current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = Item;
        }

        this.size++;
    }

    size () {
        return this.size;
    }
}

module.exports = new LinkedList();
