class Node {
    constructor (val) {
        this.val = val;
        this.left = this.right = null;
    }
}

class BinarySearchTree {
    constructor () {
        this.root = null;
    }

    insert (val) {
        if (this.root === null) {
            this.root = new Node(val);
        } else {
            this.insertRecursive(val, this.root);
        }

        return this;
    }

    insertRecursive (val, current) {
        if (val === current.val) {
            // Duplicate! BST can't have duplicate values
            return -1;
        }

        if (val < current.val) {
            if (current.left !== null) {
                this.insertRecursive(val, current.left);
            }
            current.left = new Node(val);
        } else {
            if (current.right !== null) {
                this.insertRecursive(val, current.right);
            }
            current.right = new Node(val);
        }
    }
}

const bst = new BinarySearchTree();

bst.insert(3);
bst.insert(2);
bst.insert(5);
bst.insert(8);
bst.insert(1);

console.log(JSON.stringify(bst));
