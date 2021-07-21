
var isPalindrome = function(x) {
    y = x.toString().split('').reverse().join('');
    return y == x    
};

console.log(isPalindrome(242))
console.log(isPalindrome(492))

// for practice solve with a stack (pop push) instead of bif
// solve it without converting it into a string, just manipulate the ints. math boi. 



// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

 

// Example 1:

// Input: x = 121
// Output: true
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
// Example 4:

// Input: x = -101
// Output: false