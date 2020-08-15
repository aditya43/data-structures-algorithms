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
function unOptimizedBubbleSort (arr) {
    if (arr.length < 1) {
        return -1;
    }

    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j + 1]);
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}

/**
 * Time Complexity After Optimization: O(n)
 *
 * @author Aditya Hajare <https://github.com/aditya43>
 *
 * @param arr Array of integers
 */
function optimizedBubbleSort (arr) {
    if (arr.length < 1) {
        return -1;
    }

    for (let i = arr.length; i > 0; i--) {
        let noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j + 1]);
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                noSwaps = false;
            }
        }
        if (noSwaps) {
            break;
        }
    }

    return arr;
}

console.log(unOptimizedBubbleSort([4, 1, 5, 2, 9, 3, 4]));
console.log(optimizedBubbleSort([9, 0, 8, -1, -4, 3, 1]));
