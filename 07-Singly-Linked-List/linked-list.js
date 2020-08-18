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

    reverseRecursive (prev = null) {
        if (this.head.next) {
            const current = this.head;
            this.head = this.head.next;
            current.next = prev;
            return this.reverse(current);
        }
        this.head.next = prev;
        return this;
    }

    reverseIterative () {
        let node = this.head;
        let prev = null;

        [this.head] = [this.tail];

        for (let i = 0; i < this.length; i++) {
            const next = node.next;

            node.next = prev;
            prev = node;
            node = next;
        }

        return this;
    }

    reverseBetween (start, end) {
        if (start < 0 || end > this.length) {
            return false;
        }

        const stack = [];

        let node = this.head;
        let prev = null;
        let next = null;

        for (let i = 0; i <= end; i++) {
            if (i >= start && i <= end) {
                stack.push(node);
            }

            if (i === start - 1) {
                prev = node;
            }

            if (i === end) {
                next = node.next;
            }
            node = node.next;
        }

        while (stack.length) {
            prev.next = stack.pop();

            if (stack.length === 0) {
                prev.next.next = next;
            } else {
                prev = prev.next;
            }
        }
    }

    print () {
        var arr = [];
        var current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
}

const list = new SinglyLinkedList();

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
// console.log(list.remove(2));

// reverse recursive
// list.print();
// list.reverseRecursive();

// reverse iterative
// list.print();
// list.reverseIterative();

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
// console.log(JSON.stringify(list, 1));
list.reverseBetween(1, 4);
list.print();
