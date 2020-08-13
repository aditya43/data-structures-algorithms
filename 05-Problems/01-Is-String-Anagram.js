/**
 * Check if string is anagram.
 * Given 2 strings, write a function to determine if the second string is
 * an anagram of the first.
 * An anagram is a word, phrase or name formed by rearranging the letters
 * of another, such as "cinema", formed from "iceman".
 *
 * @param str1 String 1
 * @param str2 String 2
 */
function checkAnagram (str1, str2) {
    const freq = {};

    for (const val of str1) {
        freq[val] = (freq[val] || 0) + 1;
    }

    for (const val of str2) {
        if (!freq[val] > 0) {
            return false;
        }

        if (freq[val] > 0) {
            freq[val] -= 1;
        }
    }

    return true;
}

console.log(checkAnagram('adia', 'iadx'));
