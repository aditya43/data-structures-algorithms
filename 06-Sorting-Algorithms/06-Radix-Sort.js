/**
 * Radix Sort
 *
 * Time Complexity: O(nk) | n: Length of Array | k: Number of digits (average)
 * Space Complexity: O(n + k)
 *
 * @author Aditya Hajare <https://github.com/aditya43>
 *
 * IMPORTANT POINTS AND PSUDOCODE
 * -----------------------------------
 * Radix sort is a special sorting algorithm that works on lists of numbers
 * It never makes comparisons between elements!
 * It exploits the fact that information about the size of a number is
 * encoded in the number of digits.
 * More digits means a bigger number!
 *
 * Following Helpers Are Needed For Radix Sort:
 * -----------------------------------
 * getDigit(num, place) - returns the digit in num at the given place value
 *
 * digitCount(num) - returns the number of digits in num
 *
 * mostDigits(nums) - Given an array of numbers, returns the number of
 * digits in the largest numbers in the list
 *
 * RADIX SORT PSEUDOCODE
 * -----------------------------------
 * 1. Define a function that accepts list of numbers
 * 2. Figure out how many digits the largest number has
 * 3. Loop from k = 0 up to this largest number of digits
 * 4. For each iteration of the loop:
 *  - Create buckets for each digit (0 to 9)
 *  - place each number in the corresponding bucket based on its kth digit
 * 5. Replace our existing array with values in our buckets, starting
 * with 0 and going up to 9
 * 6. return list at the end!
 *
 * @param arr Array of integers
 */

// Get digit at position in array
function getDigit (num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// Get number of digits in passed number
function digitCount (num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Get number in array with most number of digits
function mostDigits (nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

function radixSort (nums) {
    const maxDigitCount = mostDigits(nums);
    for (let k = 0; k < maxDigitCount; k++) {
        const digitBuckets = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < nums.length; i++) {
            const digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

radixSort([23, 345, 5467, 12, 2345, 9852]);
