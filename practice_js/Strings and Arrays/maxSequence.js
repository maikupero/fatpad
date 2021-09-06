// ------------------ Maximum Subarray Sum ------------------
// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c

// Coming back the next day, here's what I need to do:
// Write a function that loops through the array. Starting at every even integer,
// find the sum of every possible substring from it to the end of the array. 
// Return the max sum there if greater than the max sum so far.

var maxSequence = function(arr){
    //exception cases of empty string or only negatives
    let negative_test = arr.filter(x => x > 0);
    if (arr.length === 0 || negative_test.length === 0) return 0
    if (arr.length === 1) return arr[0]

    let max = 0;
    
    for (let x in arr) {
        if (arr[x] > 0) {
            let sum = 0;
            for (let y = x; y < arr.length; y++) {
                sum += arr[y];
                if (sum > max) max = sum;
            }    
        }
    }

    return max
}
//   console.log(maxSequence([]), '|| should return 0');
//   console.log(maxSequence([-1,-2,-3]), '|| should return 0');
// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), '|| should return 6');
console.log(maxSequence([7, 4, 11, -11, 39, 36, 10, -6, 37, -10, -32, 44, -26, -34, 43, 43]),'should return 155');

// The maximum sum subarray problem consists in finding the maximum sum 
// of a contiguous subsequence in an array or list of integers:
// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// ^ should be 6: [4, -1, 2, 1]

// Easy case is when the list is made up of only positive numbers and the 
// maximum sum is the sum of the whole array. If the list is made up of only 
// negative numbers, return 0 instead.
// Empty list is considered to have zero greatest sum. 
// Note that the empty list or array is also a valid sublist/subarray.


//var maxSequence = function(arr){
//     let negative_test = arr.filter(x => x > 0);
//     if (arr.length === 0 || negative_test.length === 0) return 0
//     if (arr.length === 1) return arr[0]

    
//     let max = 0;
//     let copy = arr;
//     let end = 0;
//     let counter = 0;
//     let current = 0;

//     // console.log(copy,'original array');

//     while (copy.length > 1) {
//         counter = 0;
//         end = copy.length-1;
//         console.log(copy, current);
//         if (copy[end] > copy[0]) {
//             copy.shift();
//         } else if (copy[end] < copy[0]) {
//             copy.pop();
//         } else if (copy[end] === copy[0]) {
//             while (copy[0 + counter] === copy[end - counter]) {
//                 counter += 1;
//             }
//             if (copy[0 + counter] > copy[end - counter]) {
//                 copy = copy.slice(0, end - counter+1);
//             } else if (copy[end - counter] > copy[0 + counter]) {
//                 copy = copy.slice(1 + counter);
//             }
//         }
//         current = copy.reduce((a, b) => a + b, 0);
//         if (current > max) max = current;
//     }

//     return max
// }