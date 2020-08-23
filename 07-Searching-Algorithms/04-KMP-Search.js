/**
 * Find the number of occurances of a sub string in a string.
 *
 * Time Complexity: O(n + m)
 * Space Complexity: O(m)
 * Pattern used: 2 pointers.
 *
 * @author Aditya Hajare <https://github.com/aditya43>
 *
 * IMPORTANT POINTS AND PSUDOCODE
 * -----------------------------------
 * KMP provides a linear time algorithm for searches in strings
 * The Knutt-Morris-Pratt algorithm offers an improvement over the naive approach
 * Published in 1977
 * This algorithm more intelligently traverses the longer string to reduce
 * the amount of redundant searching
 *
 * How do you know how far to traverse? Prefixes and Suffixes
 * -----------------------------------
 * 1. In order to determine how far we can shift the shorter string,
 * we can pre-compute the length of the longest (proper) suffix that
 * matches a (proper) prefix
 * 2. This tabulation should happen before you start looking for the short
 * string in the long string
 * 3. How to:
 *    - Find the longest (proper) suffix in the matched portion of the long string..
 *    - That matches a (proper) prefix in the matched portion of the short string!
 *    - Then shift the short string accordingly!
 *
 * @param long String
 * @param short Sub string to search
 */

function matchTable (word) {
    const arr = Array.from({ length: word.length }).fill(0);
    let suffixEnd = 1;
    let prefixEnd = 0;
    while (suffixEnd < word.length) {
        if (word[suffixEnd] === word[prefixEnd]) {
            // we can build a longer prefix based on this suffix
            // store the length of this longest prefix
            // move prefixEnd and suffixEnd
            prefixEnd += 1;
            arr[suffixEnd] = prefixEnd;
            suffixEnd += 1;
        } else if (word[suffixEnd] !== word[prefixEnd] && prefixEnd !== 0) {
            // there's a mismatch, so we can't build a larger prefix
            // move the prefixEnd to the position of the next largest prefix
            prefixEnd = arr[prefixEnd - 1];
        } else {
            // we can't build a proper prefix with any of the proper suffixes
            // let's move on
            arr[suffixEnd] = 0;
            suffixEnd += 1;
        }
    }
    return arr;
}

function kmpSearch (long, short) {
    const table = matchTable(short);
    let shortIdx = 0;
    let longIdx = 0;
    let count = 0;
    while (longIdx < long.length - short.length + shortIdx + 1) {
        if (short[shortIdx] !== long[longIdx]) {
            // we found a mismatch :(
            // if we just started searching the short, move the long pointer
            // otherwise, move the short pointer to the end of the next potential prefix
            // that will lead to a match
            if (shortIdx === 0) longIdx += 1;
            else shortIdx = table[shortIdx - 1];
        } else {
            // we found a match! shift both pointers
            shortIdx += 1;
            longIdx += 1;
            // then check to see if we've found the substring in the large string
            if (shortIdx === short.length) {
                // we found a substring! increment the count
                // then move the short pointer to the end of the next potential prefix
                count++;
                shortIdx = table[shortIdx - 1];
            }
        }
    }
    return count;
}

console.log(kmpSearch('AdiAdityaNishiAdiAviAdi', 'Adi'));
