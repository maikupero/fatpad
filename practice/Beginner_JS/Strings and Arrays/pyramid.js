// ------------------ Pyramid Array ------------------
// https://www.codewars.com/kata/515f51d438015969f7000013/train/javascript

// ---------------------------------- What I learned ----------------------------------

Array() //- can dictate the length of an array as a constructor
.fill //- fill(value, start, end) fill an array with a value (replaces anything there previously)

// function pyramid(n) {
//     const array = [];
//     for (let i = 0; i < n; i++) {
//         array.push([...Array(i+1)].fill(1))
//     }
//     return array
// }

// ---------------------------------- My clumsy way ----------------------------------
function pyramid(n) {
    if (n === 0) return []

    let array = [];
    let finishedArray = [];
    let numberOfArrays = n;
    let lengthOfArrays = n;
    
    while (numberOfArrays > 0) {
        while (lengthOfArrays > 0) {
            array.push(1);
            lengthOfArrays -= 1;
        }
        finishedArray.push(array);
        array = [];
        numberOfArrays -= 1;
        lengthOfArrays = numberOfArrays;
    }

    return finishedArray.reverse()
}

console.log(pyramid(0), 'expected [])');
console.log(pyramid(1), 'expected [[1]])');
console.log(pyramid(2), 'expected [[1], [1, 1]])');
console.log(pyramid(3), 'expected [[1], [1, 1], [1, 1, 1]])');

// ---------------------------------- The Problem ----------------------------------
// Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

// pyramid(0) => [ ]
// pyramid(1) => [ [1] ]
// pyramid(2) => [ [1], [1, 1] ]
// pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]

// https://www.codewars.com/kata/515f51d438015969f7000013/train/javascript