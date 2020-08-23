function fibonacci (n) {
    const memo = [undefined, 1, 1]; // Memoization

    return (function fib (val) {
        if (memo[val] !== undefined) {
            return memo[val];
        }

        memo[val] = fib(val - 1) + fib(val - 2);
        return memo[val];
    })(n);
}

console.log(fibonacci(300));
