class MaxBinaryHeap {
    constructor () {
        this.values = [];
    }

    insert (val) {
        this.values.push(val);
        this.bubbleUp();
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
}

const heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

console.log(heap);

// MaxBinaryHeap { values: [
//     55, 39, 41, 18,
//     27, 12, 33
//   ] }
