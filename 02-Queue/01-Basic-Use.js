// creating object for queue class
const Queue = require('./queue/queue');

// Testing dequeue and pop on an empty queue
// returns Underflow
console.log(Queue.dequeue());

// returns true
console.log(Queue.isEmpty());

// Adding elements to the queue
// queue contains [10, 20, 30, 40, 50]
Queue.enqueue(10);
Queue.enqueue(20);
Queue.enqueue(30);
Queue.enqueue(40);
Queue.enqueue(50);
Queue.enqueue(60);

// returns 10
console.log(Queue.front());

// removes 10 from the queue
// queue contains [20, 30, 40, 50, 60]
console.log(Queue.dequeue());

// returns 20
console.log(Queue.front());

// removes 20
// queue contains [30, 40, 50, 60]
console.log(Queue.dequeue());

// printing the elements of the queue
// prints [30, 40, 50, 60]
console.log(Queue.print());
