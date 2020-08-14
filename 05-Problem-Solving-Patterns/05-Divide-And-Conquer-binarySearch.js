/**
 * Find the number in sorted array.
 * Write a function called binarySearch which accepts the sorted array of integers,
 * and a number called "n" to search. The function should return the index or
 * position at which number "n" is located in array.
 *
 * Time Complexity: O(log(n))
 * Pattern used: Divide and Conquer.
 *
 * @author Aditya Hajare <https://github.com/aditya43>
 *
 * @param arr Sorted array of integers
 * @param n Number to search
 */
function binarySearch (arr, n) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        // Calculate middle
        const middle = Math.floor((left + right) / 2);
        // Get the value at middle
        const curElem = arr[middle];

        // Return index if the number is found
        if (curElem === n) {
            return middle;
        }

        // Shift left to middle + 1 if n is greater than the value at middle
        if (curElem < n) {
            left = middle + 1;
        }

        // Shift right to middle - 1 if n is smaller than the middle value
        if (curElem > n) {
            right = middle - 1;
        }
    }

    // Number not found, return -1
    return -1;
}

console.log(binarySearch([1, 2, 4, 5, 6, 9, 11], 5));
console.log(binarySearch([1, 2, 4, 5, 6, 9, 11], 11));
console.log(binarySearch([], 5));
console.log(binarySearch([1, 2, 3, 4, 6, 7, 8], 5));
