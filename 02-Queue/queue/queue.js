class Queue {
    // Array is used to implement queue.
    constructor () {
        this.items = [];
    }

    // Add new item to the queue.
    enqueue (item) {
        this.items.push(item);
    }

    // Remove and return element from queue front.
    dequeue () {
        if (this.isEmpty()) {
            return 'Underflow';
        }

        return this.items.shift();
    }

    // Return an element from front of queue without removing it.
    front () {
        if (this.isEmpty()) {
            return 'No elements in queue';
        }

        return this.items[0];
    }

    // Check if queue is empty.
    isEmpty () {
        return this.items.length === 0;
    }

    // Return concatenated string of all elements from queue.
    print () {
        let str = '';

        if (!this.isEmpty()) {
            for (let i = 0; i < this.items.length; i++) {
                str += this.items[0] + ' ';
            }
        }

        return str;
    }
}

module.exports = new Queue();
