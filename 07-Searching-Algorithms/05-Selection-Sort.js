/**
 * Selection Sort
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 *
 * @author Aditya Hajare <https://github.com/aditya43>
 *
 * @param arr Array of integers
 */
function selectionSort (arr) {
    if (arr.length < 1) {
        return -1;
    }

    for (let i = 0; i < arr.length; i++) {
        let lowest = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[lowest] > arr[j]) {
                lowest = j;
            }
        }

        if (i !== lowest) {
            [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
        }
    }

    return arr;
}

console.log(selectionSort([0, 1, 9, 4, 10, 3, 22, 1]));
console.log(selectionSort([9, 0, 8, -4, 2, -1, 0, 9]));
