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

const st = new Stack();
st.push(1);
st.push(2);
st.push(3);
st.push(4);

console.log(st.pop());
console.log(st.pop());
console.log(st.pop());
console.log(st.pop());
console.log(st.pop());
