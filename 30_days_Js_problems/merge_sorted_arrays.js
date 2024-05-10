// Write a function to merge two sorted arrays into a single sorted array.

Input: [1, 3, 5], [2, 4, 6]
Output: [1, 2, 3, 4, 5, 6]

function mergeArray(str1, str2) {
    let mergeSortedArray = [...arr1, ...arr2];
    mergeArray.sort((a, b) => a - b);
    return mergeArray;
}
console.log(mergeSortedArray([1, 3, 5], [2, 4, 6]))