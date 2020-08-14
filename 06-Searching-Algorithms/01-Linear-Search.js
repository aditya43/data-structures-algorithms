/**
 * Find the index of value in array
 *
 * Time Complexity: O(n)
 *
 * @author Aditya Hajare <https://github.com/aditya43>
 *
 * @param arr Array of values
 * @param val Value to search
 */
function linearSearch (arr, val) {
    for (index in arr) {
        if (arr[index] === val) {
            return index;
        }
    }

    return -1;
}

console.log(linearSearch(['Aditya', 'Nishi', 'John', 'Jane'], 'Nishi'));
console.log(linearSearch(['Aditya', 'Nishi', 'John', 'Jane'], 'Avi'));
