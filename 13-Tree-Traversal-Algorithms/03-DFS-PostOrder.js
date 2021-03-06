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
            return this;
        }

        if (val === current.val) {
            return -1;
        }

        if (val < current.val) {
            if (!current.left) {
                current.left = new Node(val);
                return this;
            }

            return this.insert(val, current.left);
        } else {
            if (!current.right) {
                current.right = new Node(val);
                return this;
            }

            return this.insert(val, current.right);
        }
    }

    depthFirstSearchPostOrder () {
        const output = [];

        (function traverse (node) {
            if (node.left) {
                traverse(node.left);
            }

            if (node.right) {
                traverse(node.right);
            }

            output.push(node.val);
        })(this.root);

        return output;
    }
}

const bst = new BinarySearchTree();

//      10
//   6     15
// 3  8      20

bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);
// console.log(JSON.stringify(bst, 1));

console.log(bst.depthFirstSearchPostOrder());
