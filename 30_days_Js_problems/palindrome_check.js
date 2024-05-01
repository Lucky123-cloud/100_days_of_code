// Write a function that checks if a given string is a palindrome.

// Input: "level"
// Output: true


function isPalindrome(str) {
    //write your code here
    str = str.toLowerCase();
    let cleanStr = ("")

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '0')) {
            cleanStr += char
        }
    }

    const reversedStr = cleanStr.split("").reverse().join("");
    return cleanStr === reversedStr; 
}

// test
// Example usage:
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("hello")); // Output: false