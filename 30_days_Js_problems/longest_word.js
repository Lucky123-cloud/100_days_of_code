// Write a function that takes a sentence (string) and finds the longest word.

// Input: "The quick brown fox jumps over the lazy dog"
// Output: "quick"


function longestWord(sentence) {
    //write your code here

    const words = sentence.split(" ");
    let longest = "";

    for (let i = 0; i < words.length; i++) {
        const word = words[i];

        if (word.length > longest.length) {
            longest = word;
        }
    }

    return longest;
}
const sentence = "The quick brown fox jumps over the lazy dog";
console.log(longestWord(sentence));

//You are probably asking yourself why is that there are some letters that have the same numbers of letters eg quick and brown
//but yet only the first one is taken, that is because that is how the algorithm works to pick the fisrt one appeared

//if we want to make it return all the longest words with the same number of characters we will twick our code like this below:


function longestWords(sentence) {
    const words = sentence.split(" ");
    let longestLength = 0;
    let longestWords = [];

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (word.length > longestLength) {
            longestLength = word.length;
            longestWords = [word];
        } else if (word.length === longestLength) {
            longestWords.push(word);
        }
    }

    return longestWords;
}

// Example usage:
const sentence = "The quick brown fox jumps over the lazy dog";
console.log(longestWords(sentence)); // Output: ["quick", "brown"]

