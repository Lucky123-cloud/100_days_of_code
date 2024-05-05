// Write a function to find the missing number in an array of integers from 1 to n.

Input: [1, 2, 3, 5]
Output: 4

function findMissingNumber(arr) {
    const n = arr.length + 1;
    const expectedSum = (n * (n + 1)) / 2;
    let actualSum = 0;

    for (let i = 0; i < arr.length; i++) {
        actualSum += arr[i];
    }

    const missingNumber = expectedSum - actualSum;
    return missingNumber;
}

console.log(findMissingNumber([1, 2, 3, 5]))