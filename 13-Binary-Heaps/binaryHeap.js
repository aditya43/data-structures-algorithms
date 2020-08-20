class MaxBinaryHeap {
    constructor () {
        this.values = [];
    }

    insert (val) {
        this.values.push(val);
        this.bubbleUp();
    }

    extractMax () {
        const max = this.values[0];
        const end = this.values.pop();

        if (this.values.length > 0) {
            this.values[0] = end;
            this.bubbleDown(0);
        }

        return max;
    }

    bubbleUp () {
        let idx = this.values.length - 1;

        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);

            if (this.values[idx] <= this.values[parentIdx]) {
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
        const left = 2 * index + 1;
        const right = 2 * index + 2;
        let largest = index;
        const length = this.values.length;

        // if left child is greater than parent
        if (left <= length && this.values[left] > this.values[largest]) {
            largest = left;
        }
        // if right child is greater than parent
        if (right <= length && this.values[right] > this.values[largest]) {
            largest = right;
        }
        // swap
        if (largest !== index) {
            [this.values[largest], this.values[index]] = [this.values[index], this.values[largest]];
            this.bubbleDown(largest);
        }
    }
}

const heap = new MaxBinaryHeap();

// MaxBinaryHeap { values: [
//     55, 39, 41, 18,
//     27, 12, 33
//   ] }

heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

console.log(heap);
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap);
