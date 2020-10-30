/*
438. Find All Anagrams in a String
Medium

Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

The order of output does not matter.

Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".

Input:
s: "abab" p: "ab"

Output:
[0, 1, 2]

Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
*/

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    const res = [];
    const needleFreq = buildFrequencyObj(p);

    for (const i in s) {
        const chunk = s.slice(i, +i + p.length);

        if (chunk.length !== p.length) {
            break;
        }

        const chunkFreq = buildFrequencyObj(chunk);

        for (const char in chunkFreq) {
            if (chunkFreq[char] === needleFreq[char]) {
                delete chunkFreq[char];
            }
        }

        if (Object.keys(chunkFreq).length === 0) {
            res.push(i);
        }
    }

    return res;
};

const buildFrequencyObj = (str) => {
    const freq = {};

    for (const char of str) {
        freq[char] = freq[char] + 1 || 1;
    }

    return freq;
};

console.log(findAnagrams('abab', 'ab'));
console.log(findAnagrams('cbaebabacd', 'abc'));
