import input from '../data/aoc3data.js';

let passWords = function(input) {
    let data = input.split("\n");
    let sum = 0;
    let occurences = 0;

    for (let x of data) {
        let rule = x.substring(0,x.indexOf(':')).replace(/\s/g, '');
        let key = rule.slice(rule.length - 1);
        let pass = x.substring(x.indexOf(':')).replace(/[^a-z]/g, '');
        console.log(pass,'<- pass');
        
        let top_Range = parseInt(rule.substring(rule.indexOf('-')).replace(/[^0-9]/g, ''));
        let bottom_Range = parseInt(rule.substring(0, rule.indexOf('-')));
        console.log(bottom_Range,'-',top_Range,' <- our range');

        occurences = 0;
        console.log('TESTING',pass[2],(bottom_Range - 1),(top_Range - 1));
            if (pass[bottom_Range - 1] === key) {
                occurences += 1;
            } 
            if (pass[top_Range - 1] === key) {
                occurences += 1;
            }
        console.log(occurences,'occurences of',key);
        
        if (occurences === 1) {
            sum += 1;
        }
        console.log('_______');
    }
    return sum
}

console.log(passWords(input));

// Each policy actually describes two positions in the password, 
// where 1 means the first character, 2 means the second character, and so on. 
// (Be careful; Toboggan Corporate Policies have no concept of "index zero"!) 
// Exactly one of these positions must contain the given letter. 
// Other occurrences of the letter are irrelevant for the purposes of policy enforcement.

// Given the same example list from above:

// 1-3 a: abcde is valid: position 1 contains a and position 3 does not.
// 1-3 b: cdefg is invalid: neither position 1 nor position 3 contains b.
// 2-9 c: ccccccccc is invalid: both position 2 and position 9 contain c.