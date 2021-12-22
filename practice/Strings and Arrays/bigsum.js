// ------------------ Adding Big Numbers ------------------
// https://www.codewars.com/kata/525f4206b73515bffb000b21/train/javascript

function add(a, b) {
    let carryover = 0;
    let added = 0;
    let finalstring = "";
    //Set length of the for loop to match the smaller of the two numbers.
    let l = a.length > b.length ? a.length : b.length;
    let difference = Math.abs(a.length - b.length);
    let anumber, bnumber;

    //For loop to iterate through the bigger of the two numbers.
    //When smaller number is exhausted, treat as 0s.
    for (let i = l-1; i >= 0; i--) {
        if (l === a.length) {
            anumber = Number(a[i]);
            bnumber = !(b[i - difference]) ? 0 : Number(b[i - difference]);
        } else {
            anumber = !(a[i - difference]) ? 0 : Number(a[i - difference]);
            bnumber = Number(b[i]);
        }
        added = anumber + bnumber;
        //If carryover from previous digit, add it, and delete the carryover.
        if (carryover === 1) {
            added += 1;
            carryover -= 1;
        }
        if (added > 9) {
            carryover += 1;
        }
        //Add only the ones place (factorial 10), since we carried over the tens.
        added = (added % 10).toString();
        //Essentially unshift, so conc the current string to the new added.
        finalstring = added + finalstring;
    }
    //If i.e. 888 + 222 you need to carry over the last 1.
    return (carryover === 1) ? '1' + finalstring : finalstring
}

console.log(add("1", "1"), "2");
console.log(add("123", "456"), "579");
console.log(add("888", "222"), "1110");
console.log(add("1372", "69"), "1441");
console.log(add("12", "456"), "468");
console.log(add("101", "100"), "201");
console.log(add('63829983432984289347293874', '90938498237058927340892374089'), "91002328220491911630239667963")

// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

// Example
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"
// Notes
// The input numbers are big.
// The input is a string of only digits
// The numbers are positives