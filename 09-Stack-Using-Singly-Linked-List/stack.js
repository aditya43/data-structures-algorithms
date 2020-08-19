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

    pop () {
        const node = this.first;

        if (this.size === 0) {
            return null;
        }

        if (this.size === 1) {
            this.first = this.last = null;
        } else {
            this.first = this.first.next;
        }

        this.size--;
        return node;
    }

    print () {
        const arr = [];
        let node = this.first;

        while (node) {
            arr.push(node.val);
            node = node.next;
        }

        console.log(arr);
    }
}

const stack = new Stack();

stack.push('First');
stack.push('Second');
stack.push('Third');
stack.push('Fourth');
stack.push('Fifth');
stack.push('Sixth');
stack.push('Seventh');
stack.push('Eighth');
stack.push('Ninth');

stack.print();
console.log(JSON.stringify(stack, 1));
