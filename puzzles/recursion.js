// let recursive = n => {
//     if (n === 1) {
//         return 1
//     } else {
//         return n * recursive(n - 1)
//     }
// }
// console.log(recursive(5));


// ------From Practice It!------

// function mystery1(n) {
//     if (n < 0) {
//         return -mystery1(-n);
//     } else if (n > 100) {
//         return n;
//     } else {
//         return mystery1(n * 2);
//     }   
// }
// mystery1(144); 144
// mystery1(90); 180
// mystery1(49); 196
// mystery1(40); 160
// mystery1(-10); -160

// function mystery2(n) {
//     if (n < 0) {
//         return -mystery2(-n);
//     } else if (n < 10) {
//         return (n + 1) % 10;
//     } else {
//         return 100 * mystery2(parseInt(n / 10)) + (n + 1) % 10;
//     }   
// }
// console.log(
// mystery2(7),	   //8        o  
// mystery2(42),      //423      x         100 * mystery2(4) + 3    100 * 5 + 3 = 503
// mystery2(385),	   //3856     x         n is 385, return 100 * mystery2(38) + 6
//                    //                   mystery2(38): return 100 * mystery2(3) + 9
//                    //                   mystery2(3): 4   so then return 100 * 409 + 6
// mystery2(-790),	   //-7901    x
// mystery2(-89294)); //-892945 x

// function mystery3(n) {
//     if (n <= 1) {
//         return "*";
//     } else if (n == 2) {
//         return mystery3(n - 1) + "*";
//     } else {
//         return "(" + mystery3(n - 2) + ")";
//     }   
// }
// console.log(
// mystery3(0),        // *
// mystery2(2),	    // **
// mystery2(3),	    // (*)
// mystery2(6),	    // ((**))
// mystery2(9));       // ((((*))))

// function mystery4(x, y) {
//     if (x < 10 || y < 10) {
//         return x + y;
//     } else if (x > y) {
//         var a = mystery4(parseInt(x / 2), parseInt(y / 2));
//         var b = mystery4(y, x - y);
//         return a + b;
//     } else {
//         return mystery4(x, parseInt(y / 2));
//     }
// }
// console.log(
// mystery4(10, 18),	    // mystery4(10, 9) -> 19
// mystery4(6, 15),        // 21
// mystery4(24, 10),	    // a = mystery4(12, 5) b = mystery4(10, 14), 17 + mystery4(10,7), 34
// mystery4(26, 12),	    // a = mystery4(13, 6) b = mystery4(12, 14), 19 + (12+7)   38
// mystery4(19, 20));      // mystery4(19,10) -> a = mystery4(9,5) b = mystery4(10,9) a + b = 14 + 19  33

// function mystery5(s) {
//     if (s.length == 0) {
//         return s;
//     } else if (s.length % 2 == 0) {
//         var rest = s.substr(0, s.length - 1);
//         var last = s.substr(s.length - 1, 1);
//         return last + mystery5(rest);
//     } else {
//         var first = s.substr(0, 1);
//         var rest = s.substr(1);
//         return "(" + first + ")" + mystery5(rest);
//     }
// }
// console.log(
// mystery5("foo"),            // first = f rest = oo ||| (f)mystery5(oo) rest = o last = o -> o + mystery5(o) ||| (o) ||| (f)o(o)
// mystery5("kakuro"),	        //
// mystery5("koopatroopa"),	//
// mystery5("computer"),	    //
// mystery5("01234"),	        //
// mystery5("(1 - 2) = -1)"));	//



// Practice with counter, then fizzbuzz
// let counter = (x) => {
//     if (x === 10) {
//         return x
//     } else { 
//         console.log(x);
//         return counter(x + 1)
//     }
// }
// console.log(counter(2))

// let counter = (x, y) => {
//     if (x > y) {
//         return 'wrong boy'
//     } else if (x === y) {
//         return x
//     } else {
//         if (fizzbuzz(x) != '') {
//             console.log(fizzbuzz(x));
//         } else {
//         console.log(x, y)
//         }
//         return counter(x+1, y)
//     }
// }

// let fizzbuzz = (x) => {
//     let a = '';
//     let b = '';
//     if (x % 3 === 0) {
//         a = 'fizz'
//     } 
//     if (x % 5 === 0) {
//         b = 'buzz'
//     } 
//     return a + b
// }

// console.log(counter(1, 31));


// Write a recursive function named exponent that accepts two integers 
// representing a base and an exponent and returns the base raised to that exponent. 
// For example, the call of exponent(3, 4) should return 3^4 or 81. 
// If a negative exponent is passed, the function should throw an error 
// with the message, "exponent should be non-negative".

// Do not use loops or auxiliary data structures; solve the problem recursively.

// let exponent = (a, b) => {
//     if (Math.sign(b) === -1) {              //error message
//         throw 'exponent should be non-negative'
//     } else if (b === 0) {
//         return 1
//     } else if (b === 1) {
//         return a 
//     } else {
//         return a * exponent(a, b - 1)       //recursive part
//     } 
// }

// console.log(exponent(3, -2),`|| expected 34 or 81 but got ${exponent(3, -2)}`);

// Write a recursive function named isPalindrome that accepts a string parameter 
// and returns true if the string is the same forwards as backwards, ignoring capitalization. 
// For example, the call of isPalindrome("Taco cat") should return true.

// Constraints: Do not declare any global variables or any auxiliary data structures. 
// Do not use any loops; you must use recursion.

// var isPalindrome = function(x) {
//     x = x.toLowerCase().replace((/\s/g),'');
//     if (x === '' || x.length === 1) {
//         return true
//     } else if (x.charAt(0) != x.charAt(x.length-1)) {
//         return false
//     } else {
//         return isPalindrome(x.substring(1,x.length-1))
//     }
// }
// console.log(isPalindrome('Taco cat'));

// Write a recursive function named starString that accepts an integer parameter n 
// and returns a string of stars (asterisks) 2^n long (i.e., 2 to the nth power). 
// For example:
// Call	            Output	            Reason
// starString(0);	"*"	                2^0 = 1
// starString(1);	"**"	            2^1 = 2
// starString(2);	"****"	            2^2 = 4
// starString(3);	"********"	        2^3 = 8
// starString(4);	"****************"	2^4 = 16
// var starString = function(x) {
//     if (x < 0) {
//         return "Negative"
//     } else if (x === 0) {
//         return '*'
//     } else if (x === 1) {
//         return '*'.repeat(2)
//     } else {
//         return '*'.repeat(2 * starString(x - 1).length)
//     }
// }
// apparently repeating isn't allowed

var starString = function(x) {
    if (x < 0) {
        return "Negative"
    } else if (x === 0) {
        return '*'
    } else if (x === 1) {
        return Array(3).join("*")
    } else {
        return Array(2 * starString(x - 1).length + 1).join("*")
    }
}
console.log(starString(3));