/*
120. Triangle
Medium
https://leetcode.com/problems/triangle/

Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

For example, given the following triangle
[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]

The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).

Note:

Bonus point if you are able to do this using only O(n) extra space, where n is the total number of rows in the triangle.
*/

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    var curLvlIndex = 0;
    var cur = triangle[curLvlIndex];
    var next;

    while (curLvlIndex < triangle.length - 1) {
        next = triangle[curLvlIndex + 1];

        for (var i = 0; i < next.length; i++) {
            var a, b;
            if (i === 0) {
                b = Infinity;
            } else {
                b = cur[i - 1];
            }

            if (i < cur.length) {
                a = cur[i];
            } else {
                a = Infinity;
            }

            next[i] += Math.min(a, b);
        }
        cur = next;
        curLvlIndex++;
    }

    return Math.min.apply(null, cur);
};

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
