// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. 

// That is,
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.

// Given n, calculate F(n).

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    // declare an object to hold all fibonacci values, with 0 and 1 already defined
    let fibList = {
        0: 0,
        1: 1
    }

    // for each value of n greater than 1, we calculate and add new values to the object
    for (i = 2; i <= n; i++) {
        fibList[i] = fibList[i - 2] + fibList[i - 1];
    }

    // return the object value at key of n
    return fibList[n];
};

console.log(fib(0));
console.log(fib(1));
console.log(fib(5));
console.log(fib(20));