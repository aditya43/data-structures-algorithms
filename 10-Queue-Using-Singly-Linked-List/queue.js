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
}

const queue = new Queue();
