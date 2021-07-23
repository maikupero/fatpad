// ----------------------------practice ----------------------------
//  for practice solve with a stack (pop push) instead of bif
// solve it without converting it into a string, just manipulate the ints. math boi. 
// 1. Pop the last digits off, push onto a new var.. but this will involve converting int -> array and back
//https://stackoverflow.com/questions/3389264/how-to-get-the-separate-digits-of-an-int-number
// var nostring = function(x) {
//     let rev = [];
//     const y = Array.from(String(x), Number);
//     console.log(y);
//     for (i = 0; i < y.length; i++) {
//         rev.push(y.pop(y[i]));
//         console.log(rev);
//     }
//     return rev === x 
// }

// console.log(nostring(239932))
// console.log(nostring(492))
//why is it only going 3 values into the array before ending the function?

// 2. something with %10
var isPalindrome = function(x) {        
    let y; 
    let int;    
    let counter;    
        while (x > 0) {
            y = (x % 10);  
            x = (x - y) / 10; 

            if (counter == 0) {
                int += y;
            }
                else {
                int += (y * (10 ** counter));     //2 + 9 * 10^1
                }
            
            counter += 1;

            console.log(int);
            console.log(y);
        }
    return int === x
}
console.log(isPalindrome(239932))
console.log(isPalindrome(492))
// so what happens.  492 goes in, remainder of %10 is 2. finish = 2. x becomes 49. int becomes.

// ----------------------------submitted code----------------------------

// var isPalindrome = function(x) {
//     y = x.toString().split('').reverse().join('');
//     return y == x    
// };

// console.log(isPalindrome(242))
// console.log(isPalindrome(492))

// ----------------------------prompt----------------------------
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