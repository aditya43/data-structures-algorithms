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
- Very useful for keeping track of a subset (data that is continuous in some way) of a data in an array/string etc.

-----------

## Divide And Conquer
- This pattern involves dividing a data set into smaller chunks and then repeating a process with subset of data.
- This pattern can tremendously decrease `time complexity`.

-----------

## Pure Recursion Tips
- For arrays, use methods like `slice`, `spread operator` and `concat` that makes copies of arrays so we don't end up mutating them.
- **`Strings are immutable!`**. So we will need to use methods like `slice`, `substr` or `substring` to make copies of string.
- To make copies of objects, use `Object.assign`, or the `spread operator`.

-----------

## Bubble Sort
- In this algorithm, the largest values bubble up to the top.

-----------

## Selection Sort
- Similar to bubble sort, but instead of first placing large values at sorted position, it places small values into sorted position.

-----------

## Insertion Sort
- Builds up the sort by gradually creating a larger left half which is always sorted.

-----------

## Merge Sort
- It's a combination of 2 things - Merging and Sorting.
- Exploits the fact that arrays of 0 or 1 element are always sorted.
- Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array.

-----------

## Quick Sort
- Like merge sort, exploits the fact that arrays of 0 or 1 elements are always sorted.
- Works by selecting 1 element (called `pivot`) and finding the index where pivot should end up in the sorted array.

-----------

## Radix Sort
- It works on list of numbers.
- It never makes comparison between elements.
- It exploits the fact that information about the size of a number is encoded in the number of digits.
- **More digits means a bigger number!**
- We can use it for any kind of data (e.g. strings) as long as we can convert and represent it in digits.
- In order to implement Radix Sort, it's helpful to build a few helper functions first:
    * `getDigit(num, place)`: Returns the digit in num at the given place value.
    ```js
    function getDigit(num, i) {
        return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
    }
    ```
    * `digitCount(num)`: Returns the number of digits in num.
    ```js
    function digitCount(num) {
        if (num === 0) {
            return 1;
        }
        return Math.floor(Math.log10(Math.abs(num))) + 1;
    }
    ```
    * `mostDigits(arr)`: Given an array of numbers, returns the number of digits in the larest numbers in list (using `digitCount(num)` above).
    ```js
    function mostDigits(arr) {
        let maxDigits = 0;
        for (let i = 0; i < arr.length; i++) {
            maxDigits = Math.max(maxDigits, digitCount(arr[i]))
        }
        return maxDigits;
    }
    ```

-----------

## DFS PreOrder Psudo
- Visit the node.
- Traverse left.
- Traverse right.
- **NOTE: Root is the first thing visited in PreOrder traversal.**

-----------

## DFS PostOrder Psudo
- Traverse left.
- Traverse right.
- Visit the node.
- **NOTE: Root is the last thing visited in PostOrder traversal.**

-----------

## DFS InOrder Psudo
- Traverse left.
- Visit the node.
- Traverse right.
- **NOTE: In order traversal gives us sorted data.**

-----------

## Traversal Algorithms Usage
- **BFS:**
    * Good for traversing tree that is big in height (deep).
- **DFS InOrder:**
    * Mostly used on BST.
    * Gives data in sorted order.
- **DFS PreOrder:**
    * Mostly used on BST.
    * Gives data in sorted order.
