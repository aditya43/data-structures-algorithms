class Node {
    constructor (val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor () {
        this.size = 0;
        this.first = null;
        this.last = null;
    }
}

const stack = new Stack();
