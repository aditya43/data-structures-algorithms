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

    insert (val, current = this.root) {
        if (!this.root) {
            this.root = new Node(val);
            return;
        }

        if (val === current.val) {
            return -1;
        }

        if (val < current.val) {
            if (!current.left) {
                current.left = new Node(val);
                return this;
            }

            this.insert(val, current.left);
        } else {
            if (!current.right) {
                current.right = new Node(val);
                return this;
            }

            this.insert(val, current.right);
        }
    }
}

const bst = new BinarySearchTree();

bst.insert(3);
bst.insert(2);
bst.insert(5);
bst.insert(8);
bst.insert(1);

console.log(JSON.stringify(bst, 1));
