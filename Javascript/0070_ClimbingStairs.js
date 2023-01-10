// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    // climbing variation count is a fibonacci sequence
    // declare an object to hold all variations, with 1 and 2 already defined
    let variations = {
        1: 1,
        2: 2,
    }

    // for each value of n greater than 2, we calculate and add new values to the object
    for (i = 3; i <= n; i++) {
        variations[i] = variations[i - 2] + variations[i - 1];
    }

    // return the object value at key of n
    return variations[n];
};

console.log(climbStairs(1))
console.log(climbStairs(3))
console.log(climbStairs(5))
console.log(climbStairs(10))
console.log(climbStairs(50))