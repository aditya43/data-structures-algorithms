/**
 * Visible Mountains
 *
 *
 * @author Aditya Hajare <https://github.com/aditya43>
 *
 * @param triangles Array of triangle coordinates in 2D Space (x, y)
 */

function getVisibleMountains(triangles) {
    triangles.sort((a, b) => a[1] - b[1] - a[0] - b[0]);
    const lookupTable = {};

    for (const [i, triangle] in triangles) {
        lookupTable[i] = {
            X1: triangle[0] - triangle[1],
            X2: triangle[0] + triangle[1],
        };
    }

    for (const [i, triangle] of triangles) {
        const left = triangle[0] - triangle[1];
        const right = triangle[0] + triangle[1];

        for (let j = triangles.length - 1; j > i; j--) {
            if (
                lookupTable[j] &&
                left >= lookupTable[j].X1 &&
                right <= lookupTable[j].X2
            ) {
                delete lookupTable[i];
                break;
            }
        }
    }

    return Object.keys(lookupTable).length;
}

const visible = getVisibleMountains([
    [4, 6],
    [7, 2],
    [7, 2],
    [2, 5],
    [2, 5],
]);

console.log(visible);
