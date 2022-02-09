// Best solution:
var climbStairs = function(n) {
    a = b = 1
    while (n--)
        a = (b += a) - a
    return a
};

// My simple solution... Well, this is fibonacci, starting at 1 (can't have 0 ways to ascend).
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

/*
 * @param {number} n
 * @return {number}
 */
// So build it as I go.

var climbStairs = function(n) {
    let x = [1,1];
    for (let y = 2; y <= n; y++) {
        x.push(x[y - 2]+x[y - 1]);
    }
    return x[n];
}

// Recursive solution too slow
function climbStairs(n) {
    let x = n + 1;
    if (x < 2) {
        return x
    } else {
        return (climbStairs(n - 1) + climbStairs(n - 2))
    }
}

    
// Given Examples
ex1 = 2
out1 = 2
ex2 = 3
out2 = 3
ex3 = 7
out3 = 1
console.log(`Example 1: ${ex1} yields: ${climbStairs(ex1)}, expected: ${out1}`);
console.log(`Example 1: ${ex2} yields: ${climbStairs(ex2)}, expected: ${out2}`);
console.log(`Example 1: ${ex3} yields: ${climbStairs(ex3)}, expected: ${out3}`);
// Failed test cases


// You are climbing a staircase. 
// It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. 
// In how many distinct ways can you climb to the top?

// Constraints:
// 1 <= n <= 45