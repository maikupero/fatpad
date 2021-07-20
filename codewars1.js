//eric's
function squareDigits(num){
  let x = num.toString().split('');
  let y = x.map(n => parseInt(n) ** 2);
  return parseInt(y.toString());
  }


//michael's
function squareDigits(num){
    let result = "";
    let n = num.toString();
    const digits = n.split('');
    for (let i = 0; i < n.length; i++) {
        let number = parseInt(digits[i]) ** 2;
        result = result.concat(number.toString());
    }
    return parseInt(result)
  }
// 

console.assert(typeof squareDigits(3) == 'string', "type is not string")
console.assert(squareDigits(3) == '9', `expected 9, instead returned ${squareDigits(3)}`)
console.log(squareDigits(3))
console.assert(typeof squareDigits(12) == 'string', "type is not string")
console.assert(squareDigits(12) == '14', `expected 14, instead returned ${squareDigits(12)}`)
console.log(squareDigits(12))


  //   i need to turn an integer into a string of characters
  //   each character needs to be squared independently of the rest
  //   and placed next to each other in order

//   Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.