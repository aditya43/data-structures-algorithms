/**
 * Merge Sort
 *
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 *
 * Design Pattern Used: Divide And Conquer, Recursion
 *
 * @author Aditya Hajare <https://github.com/aditya43>
 *
 * @param arr Array of integers
 */

// Function to sort and merge 2 arrays
function merge (arr1, arr2) {
    const results = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }

    return results;
}

// Function to split array and recursively call sort and merge on them
function mergeSort (arr) {
    // Base case
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

console.log(mergeSort([9, 2, 10, -4, 7, 2, -8]));
