// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

function alphabetPosition(text) {
    let result = "";

    text = text.toLowerCase();
    console.log(text);
    
    for (let i = 0; i < text.length; i++) {
        code = text.charCodeAt(i) - 96;
        console.log(code); 
        if (26 >= code && code >= 1) {
            result += code.toString() + ' ';
        }
    }  // so at this point i was figuring out how to add a space between each number.
        // i also need to remember to subtract 97 from each number. 
    return result.trimRight() // <-- i am proud i knew to put it here 
}
console.log(alphabetPosition('This iz Big Boy!'))

//var text = "JavaScript";
   
//tools: 
// • test string (letters), plug these into a function which:
// • turns all letters into lowercase.
// • ignores all non-letters. function that only accepts numbers 1-26 / 97-122
// • gives unicode codepoints for each letter. -97
// • return the test string as a string of numbers according to their position


// 2. proper program that will work for anything
// 1. dictionary by hand assigning each letter to Number