function solutionOne(str) {
    return str.split('').reverse().join('');
}

function solutionTwo(str) {
    let res = '';

    for (const chr of str) {
        res = chr + res;
    }

    return res;
}

function solutionThree(str) {
    return str.split('').reduce((rev, chr) => chr + rev, '');
}

console.log(solutionOne('aditya'));
console.log(solutionTwo('aditya'));
console.log(solutionThree('aditya'));
