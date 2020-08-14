/**
 * Find the sub array (consecutive numbers) with maximum sum.
 * Write a function called maxSubArraySum which accepts an array of integers,
 * an a number called "n". The function should calculate maximum sum of
 * "n" consecutive elements in the array.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * Pattern used: Sliding Window.
 *
 * @author Aditya Hajare <https://github.com/aditya43>
 *
 * @param arr Sorted/Unsorted array of integers
 * @param n Number of consecutive digits
 */

function maxSubArraySum (arr, n) {
    if (n > arr.length) {
        // Return if array length is smaller than number of digits we need to find.
        return null;
    }

    let maxSum = 0;
    let tempSum = 0;

    // Calculate first window
    for (let i = 0; i < n; i++) {
        maxSum += arr[i];
    }

    tempSum = maxSum;

    // Iterate after first window till end of array.
    for (let i = n; i < arr.length; i++) {
        tempSum = tempSum - arr[i - n] + arr[i];
        maxSum = Math.max(tempSum, maxSum);
    }

    return maxSum;
}

console.log(maxSubArraySum([-1, -3, 0, 2, 9, 3, 6, 7, 1, 4], 4));
console.log(maxSubArraySum([1, 2, 5, 5, 1, 1], 2));
