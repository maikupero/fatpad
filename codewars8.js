//net
function updateLight(current) {
  
    return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
  
  }

  const updateLight = current => ({
    green: 'yellow',
    yellow: 'red',
    red: 'green',
  })[current]

  //me 

function updateLight(current) {
    lights = ['green', 'yellow', 'red', 'green'];
    let n = lights.indexOf(current);

    return lights[n+1]
}

console.log(updateLight('green'))
console.log(updateLight('yellow'))
console.log(updateLight('red'))
// updatelight = (current) => 
// let x = []


//     if 'green' return 'yellow'
//     if 'yellow' return 'red'
//     if 'red' return 'green'
//     return a[x] ? 
//     return 'yellow'
//     //your code here!
  
//   }
//   function to handle each change from green, to yellow, to red, and then to green again.
// have to teach function to recognize these strings at data points in an array, 
// and then giving a data point spit out the next one in that array.

// if 'green' return 'yellow'
// if 'yellow' return 'red'
// if 'red' return 'green'

// i.e. if 0 return 1, if 1 return 2, if 2 return 0. n return n+1   n = 0; n < 2; n++