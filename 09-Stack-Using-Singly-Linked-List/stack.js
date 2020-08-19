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

    push (val) {
        const node = new Node(val);

        if (this.size === 0) {
            this.first = this.last = node;
        } else {
            node.next = this.first.next;
            this.first = node;
        }

        return ++this.size;
    }
}

const stack = new Stack();
