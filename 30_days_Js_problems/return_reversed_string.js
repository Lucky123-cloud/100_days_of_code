// Write a function that takes a string as input and returns the string reversed.

// Input: "Hello"
// Output: "olleH"

const reverseString = str => {
    return str.split("").reverse().join("");
}

// tests
console.log(reverseString("Hello"));