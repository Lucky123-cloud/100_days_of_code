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
