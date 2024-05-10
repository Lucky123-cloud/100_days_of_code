// Write a function to check if a given number is prime.

Input: 7
Output: true

function isPrime(num) {
    if (num < 2) {
        return false;
    }

    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(7))