/**
 * Construct Binary Tree From PreOrder and InOrder Traversal Output
 *
 * @author Aditya Hajare <https://github.com/aditya43>
 *
 * Approach
 * -----------------------------------
 * Use the fact that InOrder traversal is Left-Root-Right and PreOrder
 * traversal is Root-Left-Right. Also, first node in the PreOrder traversal
 * is always the root node and the first node in the InOrder traversal
 * is the leftmost node in the tree.
 *
 * Maintain two data-structures : Stack (to store the path we
 * visited while traversing PreOrder array) and Set (to maintain
 * the node in which the next right subtree is expected).
 *
 * 1. Do below until you reach the leftmost node.
 *  - Keep creating the nodes from PreOrder traversal
 *  - If the stack’s topmost element is not in the set, link the created
 * node to the left child of stack’s topmost element (if any), without
 * popping the element.
 *  - Else link the created node to the right child of stack’s topmost element.
 * Remove the stack’s topmost element from the set and the stack.
 *  - Push the node to a stack.
 * 2. Keep popping the nodes from the stack until either the stack is
 * empty, or the topmost element of stack compares to the current element
 * of InOrder traversal. Once the loop is over, push the last node back
 * into the stack and into the set.
 * 3. Goto Step 1.
 */

class Node {
    constructor (val) {
        this.val = val;
        this.left = this.right = null;
    }
}

class BinaryTree {
    constructor () {
        this.root = null;
    }

    build (preOrder, inOrder) {
        let preIdx = 0;
        let inIdx = 0;
        let node = null;
        const set = {};
        const stack = [];

        while (preIdx < preOrder.length) {
            do {
                node = new Node(preOrder[preIdx]);

                if (!this.root) {
                    this.root = node;
                }

                if (stack.length) {
                    if (set[stack[stack.length - 1].val]) {
                        delete set[stack[stack.length - 1].val];
                        stack.pop().right = node;
                    } else {
                        stack[stack.length - 1].left = node;
                    }
                }

                stack.push(node);
            } while (preOrder[preIdx++] != inOrder[inIdx] && preIdx < preOrder.length);

            node = null;
            while (stack.length && inIdx < inOrder.length && stack[stack.length - 1].val == inOrder[inIdx]) {
                node = stack.pop();
                inIdx++;
            }

            if (node != null) {
                set[node.val] = true;
                stack.push(node);
            }
        }

        return this.root;
    }
}

const bst = new BinaryTree();

const preOrder = ['A', 'B', 'D', 'E', 'C', 'F'];
const inOrder = ['D', 'B', 'E', 'A', 'F', 'C'];

bst.build(preOrder, inOrder);

console.log(JSON.stringify(bst, null, 4));
