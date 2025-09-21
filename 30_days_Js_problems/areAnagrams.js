// Write a function to check if two strings are anagrams of each other.

// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase

Input: "listen", "silent"
Output: true

function areAnagrams(str1, str2) {
    str1 = str1.replace(/[^a-z]/g, '').toLowerCase();
    str2 = str2.replace(/[^a-z]/g, '').toLowercase();

    if (str1.length !== str2.length) {
        return false;
    }

    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

console.log(areAnagrams("listen", "silent"))