/**
 * Collect all odd numbers in array.
 * Write a function called getOddNumbers to get all odd numbers in array.
 *
 * Pattern used: Pure Recursion
 *
 * @author Aditya Hajare <https://github.com/aditya43>
 *
 * @param arr Array of numbers
 */
function getOddNumbers (arr) {
    let res = [];

    // Base case
    if (arr.length === 0) {
        return res;
    }

    // Check if number is odd
    if (arr[0] % 2 !== 0) {
        res.push(arr[0]);
    }

    // Pure recursion
    res = res.concat(getOddNumbers(arr.slice(1)));
    return res;
}

console.log(getOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));
