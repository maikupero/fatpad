var maxSequence = function(arr){
    let negative_test = arr.filter(x => x > 0);
    if (arr.length === 0 || negative_test.length === 0) return 0
    
    let max = Math.max(...arr);
    let current = arr.reduce((a, b) => a + b, 0);
    let copy = arr;
    
   
    let end = copy.length-1;

    let counter = 0;
    let x = 0;
    while (copy.length > 0) {
        if (copy[end] > copy[0]) {
            copy.shift();
        } else if (copy[end] < copy[0]) {
            copy.pop();
        }
        while (copy[0 + counter] === copy[end - counter]) {
            counter += 1;
            if (copy[0 + counter] > copy[end - counter]) {

            } else if (copy[end - counter] > copy[0 + counter]) {

            }
        } 

        current = copy.reduce((a, b) => a + b, 0);
        if (current > max) max = current;
        console.log(copy);
    }

    return max
  }
//   console.log(maxSequence([]), '|| should return 0');
//   console.log(maxSequence([-1,-2,-3]), '|| should return 0');
  console.log(maxSequence([-2, 1, -3, 4, 4, -1, 2, 1, -5, 4, 4]), '|| should return 6');
//   console.log(maxSequence([-5,9,6,-4,2,3,-5,4,5]), '|| should return 10');

// The maximum sum subarray problem consists in finding the maximum sum 
// of a contiguous subsequence in an array or list of integers:
// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// ^ should be 6: [4, -1, 2, 1]

// Easy case is when the list is made up of only positive numbers and the 
// maximum sum is the sum of the whole array. If the list is made up of only 
// negative numbers, return 0 instead.
// Empty list is considered to have zero greatest sum. 
// Note that the empty list or array is also a valid sublist/subarray.