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
 * IMPORTANT POINTS AND PSUDOCODE
 * -----------------------------------
 * It's a combination of two things - merging and sorting!
 * Exploits the fact that arrays of 0 or 1 element are always sorted.
 * Works by decomposing an array into smaller arrays of 0 or 1 elements,
 * then building up a newly sorted array
 *
 * Merging Arrays Pseudocode (Merge Function):
 * -------------------------------
 * 1. Create an empty array, take a look at the smallest values in each
 * input array
 * 2. While there are still values we haven't looked at...
 *  - If the value in the first array is smaller than the value in the second
 *    array, push the value in the first array into our results and move on to
 *    the next value in the first array
 *  - If the value in the first array is larger than the value in the second array,
 *    push the value in the second array into our results and move on to the next
 *    value in the second array
 *  - Once we exhaust one array, push in all remaining values from the other array
 *
 * mergeSort Pseudocode (Merge Sort):
 * -------------------------------
 * 1. Break up the array into halves until you have arrays that are empty or
 * have one element
 * 2. Once you have smaller sorted arrays, merge those arrays with other sorted
 * arrays until you are back at the full length of the array
 * 3. Once the array has been merged back together, return the merged (and sorted!) array
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
