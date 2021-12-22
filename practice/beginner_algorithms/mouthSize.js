// ------------------ The Wide-Mouthed Frog! ------------------
// https://www.codewars.com/kata/57ec8bd8f670e9a47a000f89

//net
function mouthSize(animal) {
    return animal.toLowerCase() == 'alligator' ? 'small' : 'wide';
  }

//me
function mouthSize(animal) {
    if(animal.toLowerCase() == "alligator"){
      return "small";
    } else{
      return "wide";
    }
  }

  //remember ternary operator
  function mouthSize(animal) {
    return animal.toLowerCase() == 'alligator' ? 'small' : 'wide';
  }

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator