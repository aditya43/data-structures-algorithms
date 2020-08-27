/**
 * Visible Mountains
 *
 *
 * @author Aditya Hajare <https://github.com/aditya43>
 *
 * @param triangles Array of triangle coordinates in 2D Space (x, y)
 */

function getVisibleMountains (triangles) {
    let visible = triangles.length;

    for (const i in triangles) {
        curMountLeft = triangles[i][0] - triangles[i][1];
        curMountRight = triangles[i][0] + triangles[i][1];

        for (const j in triangles) {
            otherMountLeft = triangles[j][0] - triangles[j][1];
            otherMountRight = triangles[j][0] + triangles[j][1];

            if (i === j) {
                continue;
            }

            if (curMountLeft >= otherMountLeft && curMountRight <= otherMountRight) {
                visible -= 1;
                break;
            }
        }
    }

    return visible;
}

const visible = getVisibleMountains([
    [4, 6],
    [7, 2],
    [2, 5]
]);

console.log(visible);
