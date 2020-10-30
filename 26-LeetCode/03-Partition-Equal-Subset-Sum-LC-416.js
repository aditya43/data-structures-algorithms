/*
416. Partition Equal Subset Sum
Medium

Given a non-empty array nums containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.

Input: nums = [1,5,11,5]
Output: true
Explanation: The array can be partitioned as [1, 5, 5] and [11].

Input: nums = [1,2,3,5]
Output: false
Explanation: The array cannot be partitioned into equal sum subsets.
*/

// Solved using Dynamic Programming

var canPartition = function (nums) {
    let sum = 0;
    for (let num of nums) {
        sum += num;
    }
    if (sum % 2 != 0) return false;
    let half = sum / 2;
    let dp = new Array(half + 1).fill(false);
    dp[0] = true;
    for (let num of nums) {
        for (let i = half; i >= num; i--) {
            dp[i] = dp[i] || dp[i - num];
        }
    }
    return dp[half];
};

console.log(canPartition([1, 5, 11, 5])); // true
console.log(canPartition([1, 2, 3, 5])); // false
