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
        }

        if (this.length > 1) {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }

        node.next = node.prev = null;
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

        this.length--;
        node.next = node.prev = null;

        return node;
    }

    unshift (val) {
        const node = new Node(val);

        if (this.length === 0) {
            this.head = this.tail = node;
        }

        if (this.length > 0) {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }

        this.length++;

        return this.head;
    }

    get (index) {
        if (index < 0 || index > this.length || this.length === 0) {
            return false;
        }

        let current = null;

        if (index <= this.length / 2) {
            let count = 0;
            current = this.head;

            while (count !== index) {
                current = current.next;
                count++;
            }
        } else {
            let count = this.length - 1;
            current = this.tail;

            while (count !== index) {
                current = current.prev;
                count--;
            }
        }

        return current;
    }

    set (index, val) {
        const node = this.get(index);

        if (node) {
            node.val = val;
            return true;
        }

        return false;
    }

    insert (index, val) {
        if (index < 0 || index > this.length) {
            return false;
        }

        if (index === 0) {
            return this.unshift(val);
        }

        if (index === this.length) {
            return this.push(val);
        }

        const node = new Node(val);
        const prevNode = this.get(index - 1);

        node.next = prevNode.next;
        node.prev = prevNode;
        prevNode.next.prev = node;
        prevNode.next = node;

        this.length++;

        return true;
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
// console.log(list.shift());
// console.log(list.shift());

// unshift
// list.unshift('AAAAA');
// list.unshift('BBBBB');

// get
// console.log(list.get(1).val);
// console.log(list.get(2).val);
// console.log(list.get(8).val);

// set
// console.log(list.set(1, 'QQQQQQ').val);
// console.log(list.set(2, 'QQQQQQ').val);

// insert
list.set(2, 'QQQQQQ');
list.set(7, 'ZZZZZZ');

// print
list.print();
