// Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    enqueue(val) {
        const node = new Node(val);

        if (!this.head) {
            this.head = this.tail = node;
            return this;
        }

        this.tail.next = node;
        this.tail = node;
        return this;
    }

    dequeue() {
        const node = this.head;

        if (!node || !node.next) {
            this.head = this.tail = null;
        } else {
            this.head = node.next;
        }

        return node;
    }

    peek() {
        return this.head;
    }

    print() {
        let res = '';
        let current = this.head;

        while (current) {
            res += current.val;

            if (current.next) {
                res += ' -> ';
            }

            current = current.next;
        }

        return res;
    }
}

function weave(q1, q2) {
    if (!q1.peek() && !q2.peek()) {
        return false;
    }

    const q3 = new Queue();

    while (q1.peek() || q2.peek()) {
        if (q1.peek()) {
            q3.enqueue(q1.dequeue().val);
        }
        if (q2.peek()) {
            q3.enqueue(q2.dequeue().val);
        }
    }

    return q3;
}

const q1 = new Queue();
q1.enqueue(1).enqueue(2).enqueue(3).enqueue(4).enqueue(5);

const q2 = new Queue();
q2.enqueue('A').enqueue('B').enqueue('C').enqueue('D').enqueue('E');

const q3 = weave(q1, q2);
console.log(q3.print());
