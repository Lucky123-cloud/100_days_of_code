//  Write a function to generate the nth Fibonacci number.

Input: 6
Output: 8

// there are two ways to solve this, and here is the first method
function Fibonacci(n) {
    if (n <= 1) {
        return n
    } else {
        return Fibonacci(n - 1) + Fibonacci(n - 2);
    }
}

// The second method using iteration method

function Fibonacci2(n) {
    if (n <= 1) return n;

    let prev = 0, curr = 1;
    for (let i = 2; i <= n; i++) {
        let temp = curr;
        curr = prev + curr;
        prev = temp;
    }
    return curr
}


console.log(Fibonacci(6))
console,log(Fibonacci2(6)) 
// all of them the output is 8