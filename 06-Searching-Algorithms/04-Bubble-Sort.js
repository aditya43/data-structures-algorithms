/**
 * Bubble Sort
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 *
 * @author Aditya Hajare <https://github.com/aditya43>
 *
 * @param arr Array of integers
 */
function bubbleSort (arr) {
    if (arr.length < 1) {
        return -1;
    }

    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}

console.log(bubbleSort([4, 1, 5, 2, 9, 3, 4]));
console.log(bubbleSort([9, 0, 8, -1, -4, 3, 1]));
