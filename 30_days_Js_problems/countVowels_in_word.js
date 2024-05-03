// Write a function to count the number of vowels in a given string.

Input: "Hello"
Output: 2

function countVowels(str) {
    const vowelRegex = /[aeiou]/gi;
    const matches = str.match(countVowels);
    return matches ? matches.length : 0
}

// tests
console.log(countVowels("Hello"))