/*
934. Shortest Bridge
Medium

In a given 2D binary array A, there are two islands.  (An island is a 4-directionally connected group of 1s not connected to any other 1s.)

Now, we may change 0s to 1s so as to connect the two islands together to form 1 island.

Return the smallest number of 0s that must be flipped.  (It is guaranteed that the answer is at least 1.)

Input: A = [[0,1],[1,0]]
Output: 1

Input: A = [[0,1,0],[0,0,0],[0,0,1]]
Output: 2

Input: A = [[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
Output: 1
*/

var shortestBridge = function (A) {
    const height = A.length;
    const width = A[0].length;
    let step = 0;
    let queue = [];

    let visited = {};
    const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ];

    // dfs to mark all nodes in the first island to "#"
    // meanwhile push border nodes to a queue
    const traverse = (i, j) => {
        if (
            i < 0 ||
            i >= height ||
            j < 0 ||
            j >= width ||
            visited[`${i},${j}`]
        ) {
            return;
        }

        visited[`${i},${j}`] = true;

        A[i][j] = '#';
        let onBorder = false;
        for (let d = 0; d < directions.length; d++) {
            const newI = directions[d][0] + i;
            const newJ = directions[d][1] + j;

            if (A[newI] && A[newI][newJ] === 1) {
                traverse(newI, newJ);
            }
            if (A[newI] && A[newI][newJ] === 0) {
                onBorder = true;
            }
        }
        if (onBorder) queue.push([i, j]);
    };

    let firstIslandDone = false;
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (A[i][j] === 1 && !visited[`${i},${j}`]) {
                traverse(i, j);
                firstIslandDone = true;
                break;
            }
        }
        if (firstIslandDone) break;
    }

    visited = {};

    // bfs the queue
    while (queue.length) {
        let nextBatch = [];
        while (queue.length) {
            const curr = queue.shift();
            for (let d = 0; d < directions.length; d++) {
                const newI = directions[d][0] + curr[0];
                const newJ = directions[d][1] + curr[1];
                if (
                    A[newI] &&
                    A[newI][newJ] === 0 &&
                    !visited[`${newI},${newJ}`]
                ) {
                    nextBatch.push([newI, newJ]);
                    visited[`${newI},${newJ}`] = true;
                }
                if (A[newI] && A[newI][newJ] === 1) {
                    // found!
                    return step;
                }
            }
        }

        if (nextBatch.length) {
            step++;
            queue = [...nextBatch];
        }
    }
};

console.log(
    shortestBridge([
        [0, 1],
        [1, 0],
    ]),
);

console.log(
    shortestBridge([
        [0, 1, 0],
        [0, 0, 0],
        [0, 0, 1],
    ]),
);
console.log(
    shortestBridge([
        [1, 1, 1, 1, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 1, 1, 1, 1],
    ]),
);
