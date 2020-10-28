// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        this.children.push(new Node(data));
    }
}

function levelWidth(root) {
    const arr = [root, 'stop'];
    const widths = [0];

    while (arr.length > 1) {
        const node = arr.shift();

        if (node === 'stop') {
            widths.push(0);
            arr.push('stop');
        } else {
            arr.push(...node.children);
            widths[widths.length - 1]++;
        }
    }

    return widths;
}

const root1 = new Node(0);
root1.add(1);
root1.add(2);
root1.add(3);
root1.children[0].add(4);
root1.children[2].add(5);

const root2 = new Node(0);
root2.add(1);
root2.children[0].add(2);
root2.children[0].add(3);
root2.children[0].children[0].add(4);

console.log(levelWidth(root1)); // [1, 3, 2]
console.log(levelWidth(root2)); // [1, 1, 2, 1]
