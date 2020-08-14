/**
 * Find the number in sorted array.
 * Write a function called binarySearch which accepts the sorted array
 * of integers, and a number called "num" to search. The function should
 * return the index or position at which number "num" is located in array.
 *
 * Time Complexity: O(log(n))
 * Pattern used: Divide and Conquer.
 *
 * @author Aditya Hajare <https://github.com/aditya43>
 *
 * @param arr Sorted array of integers
 * @param num Number to search
 */
function binarySearch (arr, num) {
    if (arr.length < 1) {
        return -1;
    }

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const middle = Math.floor((left + right) / 2);

        if (arr[middle] === num) {
            return middle;
        }

        if (num < arr[middle]) {
            right = middle - 1;
        }

        if (num > arr[middle]) {
            left = middle + 1;
        }
    }

    return -1;
}

console.log(binarySearch([1, 2, 4, 5, 6, 7, 8, 10, 11], 8));
console.log(binarySearch([1, 2, 4, 5, 6, 7, 8, 10, 11], 2));
console.log(binarySearch([1, 2, 4, 5, 6, 7, 8, 10, 11], 11));
console.log(binarySearch([1, 2, 4, 5, 6, 7, 8, 10, 11], 25));
console.log(binarySearch([], 25));
