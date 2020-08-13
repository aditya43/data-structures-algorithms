/**
 * Find all pairs in array whose sum is zero.
 * Write a function called sumZero which accepts a sorted array of integers.
 * The function should return all pairs where the sum is 0.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * Pattern used: Multiple Pointers.
 *
 * @param arr Sorted array of integers
 */

function sumZero (arr) {
    let left = 0; // First pointer
    let right = arr.length - 1; // Second pointer
    const pairs = []; // Result

    // Iterate until both pointers overlap
    while (left < right) {
        const sum = arr[left] + arr[right];

        if (sum === 0) {
            // Store both numbers as pair.
            pairs.push([arr[left], arr[right]]);
            left++; // Move on to the next number from left.
        }

        // Move on to the next number from left.
        if (sum < 0) {
            left++;
        }

        // Move on to the next number from right.
        if (sum > 0) {
            right--;
        }
    }

    return pairs;
}

console.log(sumZero([-3, -2, -1, 0, 2, 3]));
