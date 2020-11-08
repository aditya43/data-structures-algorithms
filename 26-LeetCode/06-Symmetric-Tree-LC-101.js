/*
101. Symmetric Tree
Easy

Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
    1
   / \
  2   2
 / \ / \
3  4 4  3

But the following [1,2,2,null,3,null,3] is not:
    1
   / \
  2   2
   \   \
   3    3

Follow up: Solve it both recursively and iteratively.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    var queue = [];
    queue.push(root);

    while (queue.length !== 0) {
        var len = queue.length;

        if (!isLevelSymmetric(queue)) {
            return false;
        }

        for (var i = 0; i < len; i++) {
            var node = queue.shift();

            if (node !== null) {
                queue.push(node.left);
                queue.push(node.right);
            }
        }
    }

    return true;
};

function isLevelSymmetric(nodes) {
    var len = nodes.length;
    var beg = 0;
    var end = len - 1;

    while (beg < end) {
        if (
            (nodes[beg] === null && nodes[end] === null) ||
            (nodes[beg] && nodes[end] && nodes[beg].val === nodes[end].val)
        ) {
            beg++;
            end--;
        } else {
            return false;
        }
    }

    return true;
}
