// ------------------ String Incrementer ------------------
// https://www.codewars.com/kata/54a91a4883a7de5d7800009c

// After Completion, Study
function indexForSplit (string) {
    // returns int index -> start of tail number
      for (let x = string.length - 1; x >= 0; x -= 1) {
        if (isNaN(string.charAt(x))) {
          return x + 1
      }
    }
  }
  
function incrementString (string) {
    if (isNaN(parseInt(string.charAt(string.length-1)),10)){    //if it's not a number, just end it
        console.log('below wasnt a number');
        return string + '1';

    } else {
        i = indexForSplit(string);
        if (typeof(i) === "undefined") {                        //for single digit arguments
            i = 0;
        }

        let number = string.slice(i, string.length)
        let digits = number.length;
        let newnumber = (parseInt(number,10) + 1).toString()
        while (newnumber.length < digits) {
            newnumber = '0' + newnumber;
        }
        console.log(i,'i',number,'number',digits,'digits',newnumber,'newnumber')
        return string.slice(0, i) + newnumber;
    }
}

// My Solution
function incrementString (string) {
    // console.log(string,'||| Original String');

    let array = string.split(/(\d+)/);
    // console.log(array,'||| Array from string');
        
    let head = array.slice(0, array.length - 2);
    // console.log(head,'head');

    last = array.slice(-2);
    // console.log(last,'||| Last number as string');

    let digits = last[0].length;
    // console.log(digits);

    let tail = (parseInt(last[0],10) + 1).toString();
    // console.log(tail,'<tail','type>',typeof tail);
        
    if (isNaN(tail)) {
        let one = '1';
        result = string.concat(one);
    } else {
        while (tail.length < digits) {
            tail = '0' + tail;
        }

        result = head.join('').concat(tail);
    }

    return result;
}

  console.log(incrementString("foobar000"), "foobar001");
  console.log(incrementString("foo"), "foo1");
  console.log(incrementString("foobar001"), "foobar002");
  console.log(incrementString("foobar99"), "foobar100");
  console.log(incrementString("foobar099"), "foobar100");
  console.log(incrementString(""), "1");
  
// increment a string to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number, the number 1 should be appended to the new string.

// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.
