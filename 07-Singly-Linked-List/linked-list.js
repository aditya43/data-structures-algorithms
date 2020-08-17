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
            return false;
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
            return false;
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
            return false;
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
            node.next = this.head;
            this.head = node;
        }

        this.length++;
        return this.head;
    }

    get (index) {
        if (this.length === 0 || index > this.length) {
            return false;
        }

        let count = 0;
        let current = this.head;
        while (count !== index) {
            count++;
            current = current.next;
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

        if (index === this.length) {
            return this.push(val);
        }

        if (index === 0) {
            return this.unshift(val);
        }

        const node = new Node(val);
        const prev = this.get(index - 1);

        node.next = prev.next;
        prev.next = node;
        this.length++;

        return true;
    }

    remove (index) {
        if (index < 0 || index > this.length) {
            return false;
        }

        if (index === 0) {
            return this.shift();
        }

        if (index === this.length - 1) {
            return this.pop();
        }

        const prev = this.get(index - 1);
        const removed = prev.next;
        prev.next = removed.next;

        this.length--;

        return removed;
    }
}

const list = new SinglyLinkedList();

// push
list.push('Aditya');
list.push('Nishi');
list.push('John');
list.push('Jane');
list.push('Avi');

// unshift
// list.unshift('Aditya');
// list.unshift('Nishi');
// list.unshift('John');
// list.unshift('Jane');
// list.unshift('Avi');

// get
// console.log(list.get(3));

// set
// console.log(list.set(2, 'AAAAAA'));

// insert
// console.log(list.insert(2, 'AAAAA'));

// remove
console.log(list.remove(2));

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
console.log(JSON.stringify(list, 1));
