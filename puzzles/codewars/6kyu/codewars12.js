// // 1. my first solution
spinWords = (string) => { 
    x = Array.from(string.split(' ')); 
    let y = [];


    for (let i = 0; i < x.length; i++) {
        if (x[i].length < 5) {
            y.push(x[i]);
        } else {
            let z = Array.from(x[i]);
            y.push(z.reverse().join(''));
        }
    }
    return y.join(' ')
}

// 2. "i want your solution to use for (x in y) :smile:"
spinWords = (string) => {
    x = Array.from(string.split(' '));
    let y = [];

    for (i of x) {
        if (i.length < 5) {
            y.push(i);
        } else {
            let z = Array.from(i);
            y.push(z.reverse().join(''));
        }
    }
    return y.join(' ')
}
// super weird. for...in is for objects, for...of is for arrays.

// 

//and after you do it with that, refactor using .map()

spinWords = (string) => {
    x = Array.from(string.split(' ')); //array
    y = x.map(i => Array.from(i)); //array of arrays
    z = y.map(i => i.length > 4 ? i.reverse().join('') : i.join(''));
    return z.join(' ');
}
//     // for (i of x) {
//     //     z = Array.from(i);
//     //     if (i.length > 4) {
//     //         y.push(z.reverse().join(''));
//     //     } else {
//     //         y.push(z.join(''));
//     //     }
//     // }

//     // return y.join(' ')
// }


//      [Hey, fellow, warriors] ==> [Hey, wollef, sroirraw]


console.log(`expected 'Hey wollef sroirraw' returned ${spinWords('Hey fellow warriors')}`)
console.log(`expected 'This is a test' returned ${spinWords('This is a test')}`)
console.log(`expected 'This is rehtona test' returned ${spinWords('This is another test')}`)





// Write a function that takes in a string of one or more words, 
// and returns the same string, but with all five or more letter words reversed (like the name of this kata).

//   Strings passed in will consist of only letters and spaces.
//   Spaces will be included only when more than one word is present.
//   Examples:
  
//   
//   spinWords("This is a test") => "This is a test" 
//   spinWords("This is another test") => "This is rehtona test"
//   https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript