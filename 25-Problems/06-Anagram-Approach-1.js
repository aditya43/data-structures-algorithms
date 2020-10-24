// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// An anagram is a word, phrase or name formed by rearranging the letters
// of another, such as "cinema", formed from "iceman".
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(str1, str2) {
    const str1CharMap = buildFrequencyCounter(str1);
    const str2CharMap = buildFrequencyCounter(str2);

    if (Object.keys(str1CharMap).length !== Object.keys(str2CharMap).length) {
        return false;
    }

    for (let char in str1CharMap) {
        if (str1CharMap[char] !== str2CharMap[char]) {
            return false;
        }
    }

    return true;
}

function buildFrequencyCounter(str) {
    const charMap = {};

    for (const char of str.replace(/[^\w]/g, '').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap;
}

console.log(anagrams('rail safety', 'fairy tales')); // True;
console.log(anagrams('RAIL! SAFETY!', 'fairy tales')); // True;
console.log(anagrams('Hi there', 'Bye there')); // False;
