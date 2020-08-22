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
 * IMPORTANT POINTS AND PSUDOCODE
 * -----------------------------------
 * Like merge sort, exploits the fact that arrays of 0 or 1 element are
 * always sorted.
 * Works by selecting one element (called the "pivot") and finding the index
 * where the pivot should end up in the sorted array
 * Once the pivot is positioned appropriately, quick sort can be applied on
 * either side of the pivot
 *
 * Pivot Helper:
 * -------------------------------
 * 1. It will help to accept three arguments: an array, a start index, and
 * an end index (these can default to 0 and the array length minus 1, respectively)
 * 2. Grab the pivot from the start of the array
 * 3. Store the current pivot index in a variable (this will keep track of
 * where the pivot should end up)
 * 4. Loop through the array from the start until the end
 *  - If the pivot is greater than the current element, increment the pivot
 *    index variable and then swap the current element with the element at
 *    the pivot index
 * 5. Swap the starting element (i.e. the pivot) with the pivot index
 * 6. Return the pivot index
 *
 * Quicksort Pseudocode
 * -------------------------------
 * 1. Call the pivot helper on the array
 * 2. When the helper returns to you the updated pivot index, recursively
 * call the pivot helper on the subarray to the left of that index, and
 * the subarray to the right of that index
 * 3. Your base case occurs when you consider a subarray with less than 2 elements
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
