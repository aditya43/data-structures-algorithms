// creating object for queue classs
const PriorityQueue = require('./priority-queue/PriorityQueue');

// testing isEmpty and getHighestPriorityItem on an empty queue
// return true
console.log(PriorityQueue.isEmpty());

// returns "No elements in Queue"
console.log(PriorityQueue.getHighestPriorityItem());

// adding elements to the queue
PriorityQueue.enqueue('Priority 2', 2);
PriorityQueue.enqueue('Priority 1', 1);
PriorityQueue.enqueue('Priority 1', 1);
PriorityQueue.enqueue('Priority 2', 2);
PriorityQueue.enqueue('Priority 3', 3);

console.log(PriorityQueue.print());

console.log('Highest Priority: ' + PriorityQueue.getHighestPriorityItem().item);

console.log('Lowest Priority: ' + PriorityQueue.getLowestPriorityItem().item);

console.log(PriorityQueue.dequeue().item);

PriorityQueue.enqueue('Sunil', 2);

console.log(PriorityQueue.print());
