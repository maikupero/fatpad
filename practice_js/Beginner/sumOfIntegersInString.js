// ------------------ Sum of Integers in String ------------------
// https://www.codewars.com/kata/598f76a44f613e0e0b000026

function sumOfIntegersInString(s){

    return s.replace(/[^0-9]/g, ' ')
      .split(' ')
      .filter(x => x != '')
      .map(Number)
      .reduce((a, b) => a + b, 0);
  }

  console.log(sumOfIntegersInString("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"));
