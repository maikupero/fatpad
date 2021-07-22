flip = (d, a) => d === 'R' ? a.sort((x,y)=>x-y) : a.sort((x,y)=>y-x) 

// const flip=(d, a)=>{
//     if (d == 'R') 
//         console.log(a.sort((a,b)=>a-b));
//         return a.sort((a,b)=>a-b)
//     }
//     else {
//         console.log(a.sort((a,b)=>b-a));
//         return a.sort((a,b)=>b-a)
//     }
// } 


  console.log(flip('R', [4, 2, 1, 3, 22]))
  console.log(flip('L', [1, 6, 2, 3, 2010]))

  // so what this is really asking for is to rearrange a set of numbers in ascending 'R' or descending 'L' order.
//------------------------------------------------------------
// toy box. flips gravity. all cubes to side 'L' or 'R' of box, d.
// columns of cubes arranged in a line. 
// The i-th column contains a_i cubes. 

// +---+                                       +---+
// |   |                                       |   |
// +---+                                       +---+
// +---++---+     +---+              +---++---++---+
// |   ||   |     |   |   -->        |   ||   ||   |
// +---++---+     +---+              +---++---++---+
// +---++---++---++---+         +---++---++---++---+
// |   ||   ||   ||   |         |   ||   ||   ||   |
// +---++---++---++---+         +---++---++---++---+
// Given initial configuration, find out how many cubes are in each of the n columns after Bob switches the gravity.

// Examples:

// flip('R', [3, 2, 1, 2])     =>  [1, 2, 2, 3]
// flip('L', [1, 4, 5, 3, 5])  =>  [5, 5, 4, 3, 1]