class Queue {
    // Array is used to implement queue.
    constructor () {
        this.items = [];
    }

    // Add new item to the queue.
    enqueue (item) {
        this.items.push(item);
    }

    // Check if queue is empty.
    isEmpty () {
        return this.items.length === 0;
    }
}

module.exports = new Queue();
