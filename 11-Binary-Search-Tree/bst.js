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
            if (current.left === null) {
                current.left = new Node(val);
            }
            this.insertRecursive(val, current.left);
        } else {
            if (current.right === null) {
                current.right = new Node(val);
            }
            this.insertRecursive(val, current.right);
        }
    }

    search (val) {
        if (!this.root) {
            return -1;
        }

        return this.findRecursive(val, this.root) || -1;
    }

    findRecursive (val, current) {
        if (current.val === val) {
            return true;
        }
        if (val < current.val) {
            if (current.left) {
                return this.findRecursive(val, current.left);
            }
        } else {
            if (current.right) {
                return this.findRecursive(val, current.right);
            }
        }
    }
}

const bst = new BinarySearchTree();

bst.insert(3);
bst.insert(2);
bst.insert(5);
bst.insert(8);
bst.insert(1);

console.log(bst.search(3));
console.log(bst.search(2));
console.log(bst.search(5));
console.log(bst.search(8));
console.log(bst.search(1));
console.log(bst.search(99));
