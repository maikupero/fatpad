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