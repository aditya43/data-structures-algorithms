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

    print () {
        const arr = [];
        let current = this.head;

        while (current) {
            arr.push(current.val);
            current = current.next;
        }

        console.log(arr);
    }
}

const list = new DoublyLinkedList();

// push
list.push('First');
list.push('Second');
list.push('Third');
list.push('Fourth');
list.push('Fifth');
list.push('Sixth');
list.push('Seventh');
list.push('Eighth');
list.push('Ninth');

// print
list.print();
