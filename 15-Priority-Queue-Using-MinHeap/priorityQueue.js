class Node {
    constructor (val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor () {
        this.values = [];
    }

    enqueue (val, priority) {
        const node = new Node(val, priority);
        this.values.push(node);
        this.bubbleUp();
    }

    dequeue () {
        const min = this.values[0];
        const end = this.values.pop();

        if (this.values.length > 0) {
            this.values[0] = end;
            this.bubbleDown(0);
        }

        return min;
    }

    bubbleUp () {
        let idx = this.values.length - 1;

        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);

            if (this.values[idx].priority >= this.values[parentIdx].priority) {
                break;
            }

            const tmp = this.values[parentIdx];
            this.values[parentIdx] = this.values[idx];
            this.values[idx] = tmp;

            idx = parentIdx;
        }
    }

    // Recursive
    bubbleDown (index) {
        const length = this.values.length;
        let largest = index;

        const left = 2 * index + 1;
        const right = 2 * index + 2;

        // if left child is greater than parent
        if (left <= length && this.values[left]) {
            if (this.values[left].priority < this.values[largest].priority) {
                largest = left;
            }
        }

        // if right child is greater than parent
        if (right <= length && this.values[right]) {
            if (this.values[right].priority < this.values[largest].priority) {
                largest = right;
            }
        }

        // swap
        if (largest !== index) {
            [this.values[largest], this.values[index]] = [this.values[index], this.values[largest]];
            this.bubbleDown(largest);
        }
    }

    // Iterative
    bubbleDownIterative () {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            const leftChildIdx = 2 * idx + 1;
            const rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild.priority > element.priority) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild.priority > element.priority) ||
                    (swap !== null && rightChild.priority > leftChild.priority)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

const ER = new PriorityQueue();
ER.enqueue('common cold', 5);
ER.enqueue('gunshot wound', 1);
ER.enqueue('high fever', 4);
ER.enqueue('broken arm', 2);
ER.enqueue('glass in foot', 3);

console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
