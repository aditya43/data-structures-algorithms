/**
 * Keep only unique values in array.
 * Write a function called uniqueValues which accepts a sorted array,
 * and keeps only the unique values in the array. There can be negative
 * values in the array.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * Pattern used: Multiple Pointers (Two pointers at the beginning).
 *
 * @author Aditya Hajare <https://github.com/aditya43>
 *
 * @param arr Sorted array of integers
 */

function uniqueValues (arr) {
    let i = 0;

    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }

    return arr.slice(0, i + 1);
}

console.log(uniqueValues([-4, -4, -1, -1, 0, 2, 8]));
console.log(uniqueValues([]));
