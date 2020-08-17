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

    push (val) {
        if (val.length < 1) {
            throw new Error('Empty value passed to push function');
        }

        const node = new Node(val);

        if (!this.head) {
            this.head = this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }

        this.length++;
        return this;
    }

    pop () {
        if (!this.head) {
            throw new Error('List is empty');
        }

        let current = this.head;
        let newTail = this.head;

        while (current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = this.tail = null;
        }

        return current;
    }

    shift () {
        if (!this.head) {
            throw new Error('List is empty');
        }

        const current = this.head;
        this.head = this.head.next;
        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }

        return current;
    }

    unshift (val) {
        const node = new Node(val);

        if (!this.head) {
            this.head = this.tail = node;
        } else {
            node.next = this.head.next;
            this.head = node;
        }

        this.length++;
        return this.head;
    }
}

const list = new SinglyLinkedList();

// push
// list.push('Aditya');
// list.push('Nishi');
// list.push('John');
// list.push('Jane');
// list.push('Avi');

// unshift
list.unshift('Aditya');
list.unshift('Nishi');
list.unshift('John');
list.unshift('Jane');
list.unshift('Avi');

// pop
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());

// shift
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());
console.log(list);
