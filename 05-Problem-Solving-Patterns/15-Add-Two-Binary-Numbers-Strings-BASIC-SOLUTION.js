function addBinaryNumbers(a, b) {
    const res = parseInt(a, 2) + parseInt(b, 2);
    return parseInt(res, 10).toString(2);
}

console.log(addBinaryNumbers('101010', '111')); // 110001

// console.log(addBinaryNumbers('1010', '1011')); // 10101
// console.log(addBinaryNumbers('1010', '11')); // 1101
// console.log(addBinaryNumbers('11', '1')); // 100
// console.log(addBinaryNumbers('11', '')); // 11
// console.log(addBinaryNumbers('', '11')); // 11
