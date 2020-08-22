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
 * IMPORTANT POINTS AND PSUDOCODE
 * -----------------------------------
 * Binary search is a much faster form of search
 * Rather than eliminating one element at a time, you can eliminate half
 * of the remaining elements at a time
 * Binary search only works on sorted arrays!
 *
 * Binary Search Pseudocode
 * -----------------------------------
 * 1. This function accepts a sorted array and a value
 * 2. Create a left pointer at the start of the array, and a right
 * pointer at the end of the array
 * 3. While the left pointer <= right pointer:
 *  - Create a pointer in the middle
 *  - If you find the value you want, return the index
 *  - If the value is too small, move the left pointer up
 *  - If the value is too large, move the right pointer down
 * 4. If you never find the value, return -1
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
