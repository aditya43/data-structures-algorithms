// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fibLinearRuntime(n) {
    const res = [0, 1, 1];

    for (let i = 3; i <= n; i++) {
        res[i] = res[i - 1] + res[i - 2];
    }

    return res[n];
}

console.log(fibLinearRuntime(10));
