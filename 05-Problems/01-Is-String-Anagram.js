/**
 * Check if string is anagram.
 * Given 2 strings, write a function to determine if the second string is
 * an anagram of the first.
 * An anagram is a word, phrase or name formed by rearranging the letters
 * of another, such as "cinema", formed from "iceman".
 *
 * Time Complexity: O(n)
 * Pattern used: Frequency counter.
 *
 * @param str1 String 1
 * @param str2 String 2
 */
function checkAnagram (str1, str2) {
    // If strings are not equal, return false.
    if (str1.length !== str2.length) {
        return false;
    }

    // Maintain a frequency lookup object.
    const freq = {};

    // Calculate occurances for each letter in string 1.
    for (const val of str1) {
        freq[val] = (freq[val] || 0) + 1;
    }

    for (const val of str2) {
        // From str2, if the character is not occured once in frequency, return false.
        if (!freq[val] > 0) {
            return false;
        }

        // For the character in str2, decrement occurance frequency by 1.
        if (freq[val] > 0) {
            freq[val] -= 1;
        }
    }

    // String is anagram!
    return true;
}

console.log(checkAnagram('aditya', 'ayt'));
console.log(checkAnagram('aditya', 'daiyta'));
console.log(checkAnagram('iceman', 'cinema'));
console.log(checkAnagram('icemanz', 'cinemay'));
