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

console.log(anagrams('rail safety', 'fairy tales')); // True;
console.log(anagrams('RAIL! SAFETY!', 'fairy tales')); // True;
console.log(anagrams('Hi there', 'Bye there')); // False;

// function anagrams(str1, str2) {
//     // If strings are not equal, return false.
//     if (str1.length !== str2.length) {
//         return false;
//     }

//     // Maintain a frequency lookup object.
//     const freq = {};

//     // Calculate occurances for each letter in string 1.
//     for (const val of str1) {
//         freq[val] = (freq[val] || 0) + 1;
//     }

//     for (const val of str2) {
//         // From str2, if the character is not occured once in frequency, return false.
//         if (!freq[val] > 0) {
//             return false;
//         }

//         // For the character in str2, decrement occurance frequency by 1.
//         if (freq[val] > 0) {
//             freq[val] -= 1;
//         }
//     }

//     // String is anagram!
//     return true;
// }
