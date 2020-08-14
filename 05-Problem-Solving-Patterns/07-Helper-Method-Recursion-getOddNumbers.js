/**
 * Collect all odd numbers in array.
 * Write a function called getOddNumbers to get all odd numbers in array.
 *
 * Pattern used: Helper Method Recursion
 *
 * @author Aditya Hajare <https://github.com/aditya43>
 *
 * @param arr Array of numbers
 */
function getOddNumbers (arr) {
    const res = [];

    const checkOdd = arry => {
        if (arry.length === 0) {
            return;
        }

        if (arry[0] % 2 !== 0) {
            res.push(arry[0]);
        }

        checkOdd(arry.slice(1));
    };

    checkOdd(arr);
    return res;
}

console.log(getOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));
