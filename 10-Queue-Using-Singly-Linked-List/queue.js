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
}

const queue = new Queue();

console.log(queue.enqueue('First'));
console.log(queue.enqueue('Second'));
console.log(queue.enqueue('Third'));
console.log(queue.enqueue('Fourth'));
console.log(queue.enqueue('Fifth'));
console.log(queue.enqueue('Sixth'));
console.log(queue.enqueue('Seventh'));
console.log(queue.enqueue('Eighth'));
console.log(queue.enqueue('Ninth'));
