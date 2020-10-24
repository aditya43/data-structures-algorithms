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
    return cleanStr(str1) === cleanStr(str2);
}

function cleanStr(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

console.log(anagrams('rail safety', 'fairy tales')); // True;
console.log(anagrams('RAIL! SAFETY!', 'fairy tales')); // True;
console.log(anagrams('Hi there', 'Bye there')); // False;
