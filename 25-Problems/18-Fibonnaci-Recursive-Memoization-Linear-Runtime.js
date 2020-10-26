// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n, res = [0, 1, 1]) {
    if (res[n]) {
        return res[n];
    }

    res[n] = fib(n - 1, res) + fib(n - 2, res);
    return res[n];
}

console.log(fib(50));
