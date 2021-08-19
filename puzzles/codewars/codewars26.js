// ***** I actually admitted defeat on this one.*****
// Looking back on my first ~month of coding, if I could give myself advice,
// It would be - don't spend hours agonizing over how to do something you don't know how to do,
// IF the time is not enjoyable.
// Joy in learning is paramount, as coding will forever be a perpetual learning process.
// Spending time suffering what you don't know instead of admitting defeat gracefully and learning
// and moving on with what you learned, is a waste of the joy coding can bring.

// To learn more about from solutions: 

// 1.
//   function lastSurvivors(str) {
  
//   const alpha = 'abcdefghijklmnopqrstuvwxyz';
  
//   let next = str;
  
//   do {
//     str = next;
//     next = str.replace(/([a-z])(.*?)\1/g, (_, a, b) => alpha[(alpha.indexOf(a) + 1) % 26] + b);
//   } while (str !== next)
  
//   return str;
  
// }

//2. 
// const distance = (a,b) => (a.charCodeAt() + 26 - b.charCodeAt()) % 26; 
// const support  = (c,str) => ~~[...str].reduce((acc,curr) => 2 ** -distance(c,curr) + acc, 0);

// const lastSurvivors = str => [...'abcdefghijklmnopqrstuvwxyz'].filter(c => support(c,str) % 2).join('');

//3.
// This implementation is not limited to the English alphabet only.
// function lastSurvivors (str, alphabet = "abcdefghijklmnopqrstuvwxyz") {
//     const replacements = createReplacementsMap(alphabet)
  
//     const captureACharacter = "(.)"                   // RegEx can be hard to read. So some-
//     const captureOtherCharactersOptionally = "(.*?)"  // times, it is better to break it up
//     const firstCapturedCharacterRepeated = "\\1"      // into well-named strings to be recon-
//                                                       // structed into a RegExp object later.
//     const pattern =
//       new RegExp(captureACharacter + captureOtherCharactersOptionally + firstCapturedCharacterRepeated)
  
//     while (pattern.test(str)) {
//       str = str.replace(pattern, (_, repeated, rest) => replacements.get(repeated) + rest)
//     }
    
//     return str
//   }
  
//   function createReplacementsMap (alphabet) {
//     // This function supports alphabets containing characters from Unicode's
//     // Basic Multi-lingual Plane. To extend this function to support alphabets
//     // containing characters beyond the BMP, see the Examples here:
//     // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
    
//     const wrapped = alphabet + alphabet[0]
//     const mappings = Array.from(alphabet, (char, index) => [char, wrapped[index + 1]])
  
//     return new Map(mappings)
//   }

//4.
// function lastSurvivors(str) {
//     for(let i = 0 ; i < str.length - 1 ; i++){
//              for(let j = i+1 ; j < str.length ; j++){
//                  if(str.charAt(i) == str.charAt(j)){
//                      let newchar = String.fromCharCode((str.charCodeAt(i) % 122) == 0 ? 97 : (str.charCodeAt(i) % 122) + 1 );
//                      str = str.replace(str.charAt(i),"");
//                      str = str.replace(str.charAt(j-1),"");
//                      str = newchar.concat(str);
//                      i = -1;
//                      break;
//                  }
//              }
//        }
//        return str;
//  }



function lastSurvivors(string) {
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

    while (!check_finished(string)) {           //as long as there are duplicates in the string
        string = string.split('').sort().join('');
        for (let letter of alphabet) {       //checking each letter of the string
            if (count(string, letter) < 1) {   //if one or none, skip
                continue
            } else if (count(string, letter) >= 1) { // if two or more
                // remove 2 instances of letter
                string += String.fromCharCode(string.charCodeAt(letter)+1); //add one of next letter
            }
        }
    }
} 

let count = (string, character) => {
    let counter = 0;
    for (let i in string) {
        if (string[i] === character) {
            counter += 1;
        }
    }

    return Math.floor(counter/2)
}

let check_finished = (x) => {
   let string = '';
    for (let letter of x) {
        console.log(string);
        if (string.includes(letter)) {
            return false
        } else {
            string += letter;
        }
    }

    return true
}

console.log(lastSurvivors('aba'), 'expected bc');
// console.log(lastSurvivors('ccccc'), 'expected ec');
// console.log(lastSurvivors('aabbccbcd'), 'expected edc');
// console.log(lastSurvivors('a'), 'expected a');

// Substitute two equal letters by the next letter of the alphabet (two letters convert to one):

// "aa" => "b", "bb" => "c", .. "zz" => "a".
// The equal letters do not have to be adjacent.
// Repeat this operation until there are no possible substitutions left.
// Return a string.

// Example:

// let str = "zzzab"
//     str = "azab"
//     str = "bzb"
//     str = "cz"
// return "cz"
// Notes
// The order of letters in the result is not important.
// The letters "zz" transform into "a".
// There will only be lowercase letters.

// https://www.codewars.com/kata/60a1aac7d5a5fc0046c89651/train/javascript