// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize_method1(str) {
    return str
        .split(' ')
        .map((word) => {
            return word[0].toUpperCase() + word.slice(1);
        })
        .join(' ');
}

function capitalize(str) {
    return str.replace(/\b\w/g, (c) => c.toUpperCase());
}

console.log(capitalize('a short sentence')); // 'A Short Sentence'
console.log(capitalize('a lazy fox')); // 'A Lazy Fox'
console.log(capitalize('look, it is working!')); // 'Look, It Is Working!'
console.log(capitalize('आदित्य हजारे')); // 'Look, It Is Working!'
