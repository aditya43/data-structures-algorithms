/**
 * Selection Sort
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 *
 * @author Aditya Hajare <https://github.com/aditya43>
 *
 * IMPORTANT POINTS AND PSUDOCODE
 * -----------------------------------
 * Similar to bubble sort, but instead of first placing large values
 * into sorted position, it places small values into sorted position
 *
 * 1. Store the first element as the smallest value you've seen so far.
 * 2. Compare this item to the next item in the array until you find a smaller number.
 * 3. If a smaller number is found, designate that smaller number to be
 * the new "minimum" and continue until the end of the array.
 * 4. If the "minimum" is not the value (index) you initially began with, swap the two values.
 * 5.Repeat this with the next element until the array is sorted.
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
