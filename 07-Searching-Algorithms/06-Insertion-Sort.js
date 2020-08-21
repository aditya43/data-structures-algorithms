/**
 * Insertion Sort
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 *
 * @author Aditya Hajare <https://github.com/aditya43>
 *
 * @param arr Array of integers
 */
function insertionSort (arr) {
    var currentVal;

    for (var i = 1; i < arr.length; i++) {
        currentVal = arr[i];

        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];
        }

        arr[j + 1] = currentVal;
    }

    return arr;
}

insertionSort([2, 1, 9, 76, 4]);
insertionSort([8, 7, 6, 5, 4, 3, -1, -4]);
