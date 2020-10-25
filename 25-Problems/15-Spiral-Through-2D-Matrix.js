// Return spiral traversal of 2D matrix

function spiral_es6(matrix) {
    const arr = [];

    while (matrix.length) {
        arr.push(
            ...matrix.shift(),
            ...matrix.map((a) => a.pop()),
            ...(matrix.pop() || []).reverse(),
            ...matrix.map((a) => a.shift()).reverse(),
        );
    }

    console.log(arr);
}

spiral_es6([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
]);
