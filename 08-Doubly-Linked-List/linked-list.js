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

    pop () {
        if (this.head === null) {
            return false;
        }

        const node = this.tail;

        if (this.length === 1) {
            this.head = this.tail = null;
            this.length--;
            return node;
        }

        this.tail = this.tail.prev;
        this.tail.next = null;
        node.prev = null;
        this.length--;

        return node;
    }

    shift () {
        if (!this.head) {
            return false;
        }

        const node = this.head;

        if (this.length === 1) {
            this.head = this.tail = null;
        }

        if (this.length > 1) {
            this.head = node.next;
        }

        node.next = node.prev = null;

        return node;
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

// pop
// console.log(list.pop());
// console.log(list.pop());

// shift
console.log(list.shift());
console.log(list.shift());

// print
list.print();
