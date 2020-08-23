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

    /**
     * 1. Create a queue (this can be an array) and a variable to store the
     * values of nodes visited
     * 2. Place the root node in the queue
     * 3. Loop as long as there is anything in the queue
     * 4. Dequeue a node from the queue and push the value of the
     * node into the variable that stores the nodes
     * 5. If there is a left property on the node dequeued - add it to the queue
     * 6. If there is a right property on the node dequeued - add it to the queue
     * 7. Return the variable that stores the values
     */
    breadthFirstSearch () {
        if (!this.root) {
            return -1;
        }

        const queue = [this.root];
        const data = [];

        let node = this.root;

        while (queue.length) {
            node = queue.shift();
            data.push(node.val);

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
        }

        return data;
    }
}

const bst = new BinarySearchTree();

//      10
//   5     13
// 2  7  11  16

bst.insert(10);
bst.insert(5);
bst.insert(13);
bst.insert(11);
bst.insert(2);
bst.insert(16);
bst.insert(7);
// console.log(JSON.stringify(bst, 1));

console.log(bst.breadthFirstSearch());
