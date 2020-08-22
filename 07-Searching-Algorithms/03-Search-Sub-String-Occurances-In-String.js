/**
 * Find the number of occurances of a sub string in a string.
 *
 * @author Aditya Hajare <https://github.com/aditya43>
 *
 * IMPORTANT POINTS AND PSUDOCODE
 * -----------------------------------
 * 1. Loop over the longer string
 * 2. Loop over the shorter string
 * 3. If the characters don't match, break out of the inner loop
 * 4. If the characters do match, keep going
 * 5. If you complete the inner loop and find a match, increment the
 * count of matches
 * 6. Return the count
 *
 * @param str String
 * @param val Sub string to search
 */
function naiveSearch (str, val) {
    if (str.length < 1 || val.length < 1) {
        return 0;
    }

    let occurances = 0;

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < val.length; j++) {
            if (val[j] !== str[i + j]) {
                break;
            }
            if (j === val.length - 1) {
                occurances++;
            }
        }
    }

    return occurances;
}

console.log(naiveSearch('Hello Adi, Hi Aditya', 'Adi'));
console.log(naiveSearch('Hello Adi, Hi Aditya', 'Nishi'));
console.log(naiveSearch('Hello Adi, Hi Aditya', 'Aditya'));
console.log(naiveSearch('', 'Adi'));
