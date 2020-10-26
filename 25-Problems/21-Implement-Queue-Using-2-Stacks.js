// Implement Queue using 2 stacks

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.head = null;
    }

    push(val) {
        const node = new Node(val);

        if (!this.head) {
            this.head = node;
            return this;
        }

        node.next = this.head;
        this.head = node;
        return this;
    }

    pop() {
        const node = this.head;

        if (!node || !node.next) {
            this.head = null;
        } else {
            this.head = node.next;
        }

        return node;
    }

    peek() {
        return this.head;
    }
}

class Queue {
    constructor() {
        this.stack = new Stack();
    }

    enqueue(val) {
        this.stack.push(val);
        return this;
    }

    dequeue() {
        const tempStack = new Stack();

        while (this.stack.peek()) {
            tempStack.push(this.stack.pop().val);
        }

        const node = tempStack.pop();

        while (tempStack.peek()) {
            this.stack.push(tempStack.pop().val);
        }

        return node;
    }
}

const q = new Queue();
q.enqueue(1).enqueue(2).enqueue(3).enqueue(4);

console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
