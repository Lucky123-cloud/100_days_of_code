// Write a function to calculate the factorial of a given number.

// Input: 5
// Output: 120


function factorial(n) {
    if (n == 0 || n == 1) {
        return 1
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5))