## Data Structures And Algorithms
:hotsprings: Data structures, algorithms and problem solving patterns using JavaScript.

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
    * `mostDigits(arr)`: Given an array of numbers, returns the number of digits in the largest numbers in list (using `digitCount(num)` above).
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
    * Can be used to `export` a tree structure so that it is easily reconstructed or copied.
    * We know `root` is at the beginning.
- **When to use BFS vs. DFS:**
    * That heavily depends on the structure of the search tree and the number and location of solutions (aka searched-for items).
        - If we know a solution is not far from the root of the tree, a breadth first search (BFS) might be better.
        - If the tree is very deep and solutions are rare, depth first search (DFS) might take an extremely long time, but BFS could be faster.
        - If the tree is very wide, a BFS might need too much memory, so it might be completely impractical.
        - If solutions are frequent but located deep in the tree, BFS could be impractical.
        - If the search tree is very deep we will need to restrict the search depth for depth first search (DFS), anyway (for example with iterative deepening).
        - Breadth-first search is less space-efficient than depth-first search because BFS keeps a priority queue of the entire frontier while DFS maintains a few pointers at each level.
        - If it is known that an answer will likely be found far into a tree, DFS is a better option than BFS. BFS is good to use when the depth of the tree can vary or if a single answer is needed—for example, the shortest path in a tree. If the entire tree should be traversed, DFS is a better option.
        - BFS always returns an optimal answer, but this is not guaranteed for DFS.
        - Depth-first search is used in topological sorting, scheduling problems, cycle detection in graphs, and solving puzzles with only one solution, such as a maze or a sudoku puzzle.
        - Other applications involve analyzing networks, for example, testing if a graph is bipartite. Depth-first search is often used as a subroutine in network flow algorithms such as the Ford-Fulkerson algorithm.
        - DFS is also used as a subroutine in matching algorithms in graph theory such as the Hopcroft–Karp algorithm.
        - Depth-first searches are used in mapping routes, scheduling, and finding spanning trees.
    * But these are just rules of thumb; we'll probably need to experiment.

-----------

## When to use Pre-Order, In-order or Post-Order?
- The traversal strategy the programmer selects depends on the specific needs of the algorithm being designed. The goal is speed, so pick the strategy that brings you the nodes you require the fastest.
- **In Order:**
    * If you know that the tree has an inherent sequence in the nodes, and you want to flatten the tree back into its original sequence, than an **in-order** traversal should be used. The tree would be flattened in the same way it was created. A pre-order or post-order traversal might not unwind the tree back into the sequence which was used to create it.
    * Used to get the values of the nodes in non-decreasing order in a BST.
- **Post Order:**
    * If you know you need to explore all the leaves before any nodes, you select **post-order** because you don't waste any time inspecting roots in search for leaves.
    * Used to delete a tree from leaf to root
- **Pre Order:**
    * If you know you need to explore the roots before inspecting any leaves, you pick **pre-order** because you will encounter all the roots before all of the leaves.
    * Used to create a copy of a tree. For example, if you want to create a replica of a tree, put the nodes in an array with a pre-order traversal. Then perform an Insert operation on a new tree for each value in the array. You will end up with a copy of your original tree.
    * If I wanted to simply print out the hierarchical format of the tree in a linear format, I'd probably use preorder traversal.
    ```
    - ROOT
        - A
            - B
            - C
        - D
            - E
            - F
                - G
    ```

-----------

## Dynamic Programming
- A method for solving a complex problem by breaking it down into a collection of simpler **subproblems**, solving each of those subproblems **just once**, and **storing their solutions**.
- **When to use Dynamic Programming:** Where there is optimal substructure present and overlapping subproblems.
- **Overlapping Subproblem:** A problem is said to have `overlapping subproblems` if it can be broken down into subproblems which are reused several times.
    * For e.g. **Fibonacci Sequence:** Every number after the first two is the sum of the two preceding ones.
    * **Merge Sort DOES NOT have overlapping subproblems!** For e.g.:
        - `mergeSort([10, 24, 73 76])`: **DOES NOT have overlapping subproblems!**
        - `mergeSort([10, 24, 10, 24])`: **DOES have overlapping subproblems!**
- **Optimal Substructure:** A problem is said to have `Optimal Substructure` if an optimal solution can be constructed from optimal solutions of its `subproblems`.

-----------

## Dynamic Programming - Memoization
- Storing the results of expensive function calls and returning the cached result when the same input occur again.
