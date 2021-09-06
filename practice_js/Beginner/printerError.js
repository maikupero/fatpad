// ------------------ Printer Errors ------------------
// https://www.codewars.com/kata/56541980fa08ab47a0000040

// function printerError(s) {
//     let e = [];     //errors -- all letters after m that show up in s
//     let a = 97;
//     let alphabet = {};
        
//     for (var i = 0; i<26; i++) {
//         alphabet[String.fromCharCode(a + i)] = String.fromCharCode(a + i) - 97;
//     }
//     console.log(charArray);

//     for (let j = 0; j < s.length; j++) {
//         while (s > 12) {
//             e.toString() + ' ';
//         }
//     }

//     return `${e} / ${s.length}` // as a rational
// }

function printerError(s) {
    let e = []; //error array
    let a = ['n','o','p','q','r','s','t','u','v','w','x','y','z']; //error data
    for (let i = 0; i < s.length; i++) {    //for every index in s
        for (let j = 0; j < a.length; j++) {    //match them against every index in a
            if (s[i] == a[j]) { 
                e.push(a[j]);   // if error, put it in error array
            } else {
                continue; //if not, forget about it
            }
        }
    }
    return `${e.length}/${s.length}` //return length of (number of values in) e over length of the original data
}
// function needs to be able to recognize "ignore a-m" and "put n-z's into e"
console.log(`expected "3/56" returned ${printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")}`)

// In a factory a printer prints labels for boxes. 
// For one kind of boxes the printer has to use colors which, 
// for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. 
// For example a "good" control string would be aaabbbbhaijjjm 
// meaning that the printer used three times color a, four times color b, 
// one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction 
// and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string 
// will return the error rate of the printer as a string representing a rational 
// whose numerator is the number of errors and the denominator the length of the control string. 
// Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

// Examples:
// s="aaabbbbhaijjjm"
// error_printer(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// error_printer(s) => "8/22"