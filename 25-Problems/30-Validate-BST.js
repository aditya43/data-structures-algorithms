// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(data) {
        if (data < this.data && this.left) {
            this.left.insert(data);
        } else if (data < this.data) {
            this.left = new Node(data);
        } else if (data > this.data && this.right) {
            this.right.insert(data);
        } else if (data > this.data) {
            this.right = new Node(data);
        }
    }
}

function validate(node, min = null, max = null) {
    if (max !== null && node.data > max) {
        return false;
    }

    if (min !== null && node.data < min) {
        return false;
    }

    if (node.left && !validate(node.left, min, node.data)) {
        return false;
    }

    if (node.right && !validate(node.right, node.data, max)) {
        return false;
    }

    return true;
}

const root1 = new Node(10);
root1.insert(5);
root1.insert(15);
root1.insert(0);
root1.insert(20);

const root2 = new Node(10);
root2.insert(5);
root2.insert(15);
root2.insert(0);
root2.insert(20);
root2.left.left.right = new Node(999);

console.log(validate(root1)); // true
console.log(validate(root2)); // false
