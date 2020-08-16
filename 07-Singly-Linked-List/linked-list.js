class Node {
    constructor (val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push (val) {
        if (val.length < 1) {
            throw new Error('Empty value passed to push function');
        }

        const node = new Node(val);

        if (this.head === null && this.tail === null) {
            this.head = this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }

        this.length++;
    }
}

const list = new SinglyLinkedList();
list.push('Aditya');
list.push('Nishi');
list.push('John');
list.push('Jane');
list.push('Avi');
console.log(list);
