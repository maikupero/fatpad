// ------------------ Detect Pangram ------------------
// https://www.codewars.com/kata/545cedaa9943f7fe7b000048

function isPangram(string){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';

    sentence = string.toLowerCase().replace(/[^a-z]/g, '').split('').sort();

    let pangram = [];
    sentence.forEach((x) => {
        if (!pangram.includes(x)) {
            pangram.push(x);
        }
    });

    return pangram.join('') === alphabet
  }

  console.log(isPangram('The quick brown fox jumps over the lazy dog'));
//   console.log(isPangram('This one does not have every letter'));
//   console.log(isPangram('Testing with @#&*$*&@(#&$()@*symvbolsslfosfls'));

      //remove spaces from string, put in new string as lowercase.
    //run through each letter, if in regex a-z pop out and push to an array.
    //if at the end the array matches a-z

// A pangram is a sentence that contains every single letter of the alphabet at least once. 
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
// because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. 
// Return True if it is, False if not. Ignore numbers and punctuation.