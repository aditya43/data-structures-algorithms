/**
 * Find the number of occurances of a sub string in a string.
 *
 * @author Aditya Hajare <https://github.com/aditya43>
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
