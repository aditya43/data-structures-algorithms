const LinkedList = require('./linked-list/LinkedList');

LinkedList.add('First');
LinkedList.add('Second');
LinkedList.add('Third');
LinkedList.add('Fourth');
LinkedList.add('Fifth');

console.log('First Node: ', LinkedList.getFirst());
console.log('Last Node: ', LinkedList.getLast());
console.log('Size: ', LinkedList.getSize());
console.log('Print: ', LinkedList.print());
