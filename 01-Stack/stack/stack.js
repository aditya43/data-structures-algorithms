class Stack {
    // Array is used to implement stack.
    constructor () {
        this.items = [];
    }

    // push element into the items.
    push (item) {
        this.items.push(item);
    }

    // Return top most element from the stack.
    pop () {
        if (this.items.length == 0) {
            return 'Underflow - stack is empty';
        }

        return this.items.pop();
    }

    // Return the topmost element without removing it from the stack.
    peek () {
        if (this.items.length == 0) {
            return 'Underflow - stack is empty';
        }

        return this.item[this.items.length - 1];
    }

    // Check if stack is empty.
    isEmpty () {
        return this.items.length === 0;
    }

    // Prepare and return contacted string of all items in stack.
    printStack () {
        let str = '';

        if (this.items.length > 0) {
            for (let i = 0; i < this.items.length; i++) {
                str += this.items[i] + ' ';
            }
        }

        return str;
    }
}

module.exports = new Stack();
