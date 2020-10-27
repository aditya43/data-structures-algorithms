// Find midpoint of an array without using counter

function midPoint(arr) {
    let slow = 0;
    let fast = 0;

    while (arr[fast + 2]) {
        slow++;
        fast += 2;
    }

    return slow;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
const midpoint = midPoint(arr);

console.log(arr[midpoint]);
