var addBinaryNumbers = function (a, b) {
    let s = '';
    let c = 0,
        i = a.length - 1,
        j = b.length - 1;
    while (i >= 0 || j >= 0 || c === 1) {
        c += i >= 0 ? +a[i--] : 0;
        c += j >= 0 ? +b[j--] : 0;

        s = ~~(c % 2) + s;

        c = ~~(c / 2);
    }
    return s;
};

console.log(addBinaryNumbers('101010', '111')); // 110001

// console.log(addBinaryNumbers('1010', '1011')); // 10101
// console.log(addBinaryNumbers('1010', '11')); // 1101
// console.log(addBinaryNumbers('11', '1')); // 100
// console.log(addBinaryNumbers('11', '')); // 11
// console.log(addBinaryNumbers('', '11')); // 11
