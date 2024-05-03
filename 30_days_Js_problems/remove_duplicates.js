// Write a function that removes duplicate elements from an array.

Input: [1, 2, 2, 3, 4, 4, 5]
Output: [1, 2, 3, 4, 5]

function removeDuplicates(arr) {
    no_duplicates = new Set(arr);
    return Array.from(no_duplicates)
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]))