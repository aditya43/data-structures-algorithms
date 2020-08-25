/**
 * Bubble Sort
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 *
 * @author Aditya Hajare <https://github.com/aditya43>
 *
 * IMPORTANT POINTS AND PSUDOCODE
 * -----------------------------------
 * A sorting algorithm where the largest values bubble up to the top!
 *
 * 1. Start looping from with a variable called i the end of the array
 * towards the beginning
 * 2. Start an inner loop with a variable called j from the beginning until i - 1
 * 3. If arr[j] is greater than arr[j+1], swap those two values!
 * 4. Return the sorted array
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
        // If no number was swapped that means array is sorted now, break the loop.
        if (noSwaps) {
            return arr;
        }
    }

    return arr;
}

console.log(unOptimizedBubbleSort([4, 1, 5, 2, 9, 3, 4]));
console.log(optimizedBubbleSort([9, 0, 8, -1, -4, 3, 1]));
