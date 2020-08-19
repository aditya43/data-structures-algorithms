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

    insert (val, node = this.root) {
        if (!this.root) {
            this.root = new Node(val);
            return this;
        }

        if (val === node.val) {
            return -1;
        }

        if (val < node.val) {
            if (!node.left) {
                node.left = new Node(val);
                return this;
            }

            return this.insert(val, node.left);
        } else {
            if (!node.right) {
                node.right = new Node(val);
                return this;
            }

            return this.insert(val, node.right);
        }
    }

    find (val, node = this.root) {
        if (!node) {
            return -1;
        }

        if (node) {
            if (val === node.val) {
                return true;
            }
            if (val < node.val) {
                if (node.left) {
                    return this.find(val, node.left);
                }
            } else {
                if (node.right) {
                    return this.find(val, node.right);
                }
            }
        }

        return -1;
    }
}

const bst = new BinarySearchTree();

bst.insert(3);
bst.insert(2);
bst.insert(5);
bst.insert(8);
bst.insert(1);

console.log(bst.find(3));
console.log(bst.find(2));
console.log(bst.find(5));
console.log(bst.find(8));
console.log(bst.find(1));
console.log(bst.find(99));

console.log(JSON.stringify(bst, 1));
