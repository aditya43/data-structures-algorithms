const QElement = require('./QElement');

// PriorityQueue class
class PriorityQueue {
    constructor () {
        // An array is used to implement priority
        this.items = [];
    }

    // enqueue function to add element to the queue as per priority.
    enqueue (item, priority) {
        const QItem = new QElement(item, priority);
        let contain = false;

        // Iterating through the entire item array to add element at the correct location of the Queue
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].priority > QItem.priority) {
                this.items.splice(i, 0, QItem);
                contain = true;
                break;
            }
        }

        // if the element have the highest priority it is added at the end of the queue
        if (!contain) {
            this.items.push(QItem);
        }
    }

    // dequeue method to remove element from the queue
    dequeue () {
    // return the dequeued element and remove it. if the queue is empty returns Underflow
        if (this.isEmpty()) {
            return 'Underflow';
        }

        return this.items.shift();
    }

    // front function
    getLowestPriorityItem () {
    // returns the highest priority element in the Priority queue without removing it.
        if (this.isEmpty()) {
            return 'No elements in Queue';
        }

        return this.items[0];
    }
}

module.exports = new PriorityQueue();
