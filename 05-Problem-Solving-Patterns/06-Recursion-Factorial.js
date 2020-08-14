/**
 * Find the factorial of a number
 * Write a function called factorial to get the factorial of a number.
 *
 * Pattern used: Recursion
 *
 * @author Aditya Hajare <https://github.com/aditya43>
 *
 * @param n Number
 */
function factorialOptimized (n) {
    return n || n * factorialOptimized(n - 1);
}

// Long way
function factorial (n) {
    // If input is not valid digit, return false
    if (!/[\d]/.test(n)) {
        return false;
    }

    // Base case
    if (n === 1) {
        return 1;
    }

    // Recursive call
    return n * factorial(n - 1);
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(5));
console.log(factorialOptimized(3));
console.log(factorial('Aditya'));
