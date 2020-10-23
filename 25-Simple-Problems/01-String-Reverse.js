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

console.log(solutionOne('aditya'));
