class Node {
    constructor (val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor () {
        this.size = 0;
        this.head = this.tail = null;
    }

    enqueue (val) {
        const node = new Node(val);

        if (this.size === 0) {
            this.head = this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }

        return ++this.size;
    }

    dequeue () {
        if (this.size === 0) {
            return -1;
        }

        const node = this.head;

        if (this.size === 1) {
            this.head = this.tail = null;
        } else {
            this.head = node.next;
        }

        this.size--;

        return node;
    }

    print () {
        const arr = [];

        let node = this.head;

        while (node) {
            arr.push(node.val);
            node = node.next;
        }

        console.log(arr);
    }
}

const queue = new Queue();

// push
console.log(queue.enqueue('First'));
console.log(queue.enqueue('Second'));
console.log(queue.enqueue('Third'));
console.log(queue.enqueue('Fourth'));
console.log(queue.enqueue('Fifth'));
console.log(queue.enqueue('Sixth'));
console.log(queue.enqueue('Seventh'));
console.log(queue.enqueue('Eighth'));
console.log(queue.enqueue('Ninth'));

// print
queue.print();

// dequeue
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
