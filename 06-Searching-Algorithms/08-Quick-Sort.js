/**
 * Quick Sort
 *
 * Time Complexity: Worst: O(^2) | Average: O(n log n)
 * Space Complexity: O(log(n))
 *
 * Design Pattern Used: Divide And Conquer, Recursion
 *
 * @author Aditya Hajare <https://github.com/aditya43>
 *
 * @param arr Array of integers
 */

function pivot (arr, start = 0, end = arr.length - 1) {
    // We are assuming the pivot is always the first element
    const pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]];
        }
    }

    // Swap the pivot from the start the swapPoint
    [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]];
    return swapIdx;
}

function quickSort (arr, left = 0, right = arr.length - 1) {
    if (left < right) { // Base case
        const pivotIndex = pivot(arr, left, right); // 3
        // left
        quickSort(arr, left, pivotIndex - 1);
        // right
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

console.log(quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]));
