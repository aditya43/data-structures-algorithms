## Data Structures And Algorithms
Data structures and algorithms using JavaScript

## Author
Aditya Hajare ([Linkedin](https://in.linkedin.com/in/aditya-hajare)).

## Current Status
WIP (Work In Progress)!

## License
Open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).

----------------------------------------

## Big O Shorthands
- Arithmatic operations are constant.
- Variable assignment is constant.
- Accessing elements in array (by index) or object (by key) is constant.
- In a loop, the complexity is the length of the loop times the complexity of whatever happens inside the loop.

-----------

## Auxiliary Space Complexity
- Refers to space required by the algorithm, not including space required by the inputs.
- Most primitive (`boolean, numbers, undefined, null`) are constant space.
- Strings require `O(n)` space where `n` is the string length.
- Reference types are generally `O(n)`, when `n` is the length (for arrays) or the number of `keys` (for objects).

-----------

## Logarithmic Time/Space Complexity
- The logarithm of a number roughly measures the `number of times we can divide that number by 2` **`before we get a value that is less than or equals to 1`**.
- `Recursion` sometimes involve logarithmic `Space Complexity`.

-----------

## Famous Problem Solving Patterns:
- Frequency Counter.
- Multiple Pointers.
- Sliding Window.
- Divide And Conquer.
- Dynamic Programming.
- Greedy Algorithms.
- Backtracking.
- Recursion.
- Brute Force.
- Branch & Bound.
- Linear Programming.
- Integer Programming.
- Neural Networks.
- Genetic Algorithms.
- Simulated Annealing.
- Memoization

-----------

## Frequency Counter
- This pattern uses objects or sets to collect values/frequencies of values.
- This can often avoid the need for nested loop or `O(n^2)` operations with arrays/strings.

-----------

## Multiple Pointers
- Creating `pointers` or values that corresponds to an index or position and move towards the beginning, end or middle based on a certain condition.
- Very efficient for solving problems with minimal space complexity as well.

-----------

## Sliding Window
- This pattern involves creating a `window` which can either be an array or number from one position to another.
- Depending on certain condition, the `window` either increases or closes (and a new `window` is created).
- Very useful for keeping track of a subset of a data in an array/string etc.
