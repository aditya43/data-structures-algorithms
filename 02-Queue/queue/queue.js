class Queue {
    // Array is used to implement queue.
    constructor () {
        this.items = [];
    }

    // Add new item to the queue.
    enqueue (item) {
        this.items.push(item);
    }
}

module.exports = new Queue();
