function memoize(fn) {
    const cache = {};

    return function (...args) {
        if (cache[args]) {
            return cache[args];
        }

        const res = fn.apply(this, args);
        cache[args] = res;

        return res;
    };
}

function slowFib(n) {
    if (n < 2) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib); // Turning slow fib function to memoized fast function

console.log(fib(200));
