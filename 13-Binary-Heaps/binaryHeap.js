class MaxBinaryHeap {
    constructor () {
        this.values = [];
    }

    insert (val) {
        this.values.push(val);
        this.bubbleUp();
    }

    bubbleUp () {

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
