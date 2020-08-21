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
            node.next = this.first;
            this.first = node;
        }

        return ++this.size;
    }

    pop () {
        if (this.size === 0) {
            return null;
        }

        const node = this.first;

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

// push
console.log(stack.push('First'));
console.log(stack.push('Second'));
console.log(stack.push('Third'));
console.log(stack.push('Fourth'));
console.log(stack.push('Fifth'));
console.log(stack.push('Sixth'));
console.log(stack.push('Seventh'));
console.log(stack.push('Eighth'));
console.log(stack.push('Ninth'));

// print
stack.print();

// pop
console.log(stack.pop());
console.log(stack.pop());
