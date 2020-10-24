const { lookup } = require('dns');

function maxRepeatingChar(str) {
    const lookupTable = {};
    let max = 0;
    let maxChar = '';

    for (let char of str) {
        lookupTable[char] = lookupTable[char] + 1 || 1;
    }

    for (let char in lookupTable) {
        if (lookupTable[char] > max) {
            max = lookupTable[char];
            maxChar = char;
        }
    }

    return maxChar;
}

console.log(maxRepeatingChar('abccccccccab'));
console.log(maxRepeatingChar('aditya'));
