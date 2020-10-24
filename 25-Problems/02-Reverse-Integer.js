function reverseInteger(num) {
    const reversed = num.toString().split('').reverse().join('');

    return parseInt(reversed) * Math.sign(num);
}

console.log(reverseInteger(100));
console.log(reverseInteger(123));
console.log(reverseInteger(-100));
console.log(reverseInteger(-123));
