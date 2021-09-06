//  ------------------ With Dictionaries ------------------




//  ------------------ My first solution, messy ------------------
function topThreeWords(string) {
    //get our string ready to work with
    let cleanedUpString = string
        .toLowerCase()
        .replace(/\s{2,}/g, ' ')        //remove multiple spaces
        .replace(/[^a-z\n\s\']/g, '')   //remove all but letters, spaces, or apostrophes
        .split(/[\n\s]/g);  

    //sort our string into two arrays - one for unique words, and one to hold the counts for each.
    let unique_words = [];
    let val = [];
    for (let word of cleanedUpString) {
        //annoying exception cases with apostrophes and spaces
        if (word === '' ||word === '\'') continue 
        //skip words already checked
        if (unique_words.indexOf(word) != -1) continue
        //save word to unique words, save its count to val
        unique_words.push(word);
        val.push(cleanedUpString.filter(x => x === word).length); 
    } 

    //pick out the 3 most common words in the arrays as long as there are words to choose from
    let topthree = [];
    for (let top = 1; top <= 3; top++) {
        if (val.length === 0) break
        let index = val.indexOf(Math.max(...val));
        topthree.push(unique_words[index]);
        unique_words.splice(index, 1);
        val.splice(index, 1);
    }

    return topthree
}

// function countOccurences (array) {
//     return array.filter(x => x === cleanedUpString[word]).length
// 

console.log(topThreeWords("This is my, well, this, this is my test case."), 'expected [this,is,my]');
console.log(topThreeWords("a a a  b  c c  d d d d  e e e e e"), 'expected [e,d,a]');
console.log(topThreeWords("a a c b b"), 'expected [a,b,c]');
console.log(topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"),'expected [e,ddd,aa]');
console.log(topThreeWords("  //wont won't won't"), 'expected [wont, wont]');
console.log(topThreeWords("  , e   .. "), 'expected ["e"]');
console.log(topThreeWords("  ...  "), 'expected []');
console.log(topThreeWords("  '  "), 'expected []');
console.log(topThreeWords(`In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.`), 'expected [a,of,on]');

// Write a function that, given a string of text (possibly with punctuation and line-breaks), 
// returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

// A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII. 
// Matches should be case-insensitive, and the words in the result should be lowercased.
// Ties may be broken arbitrarily.
// If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.

// Bonus points (not really, but just for fun):
// Avoid creating an array whose memory footprint is roughly as big as the input text. 
// Avoid sorting the entire array of unique words. 

// https://www.codewars.com/kata/51e056fe544cf36c410000fb/train/javascript