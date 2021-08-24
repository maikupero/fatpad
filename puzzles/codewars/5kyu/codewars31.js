var maxSequence = function(arr){
    let negative_test = arr.filter(x => x > 0);
    if (arr.length === 0 || negative_test.length === 0) return 0
    if (arr.length === 1) return arr[0]

    let max = 0;
    let copy = arr;
    let end = 0;
    let counter = 0;
    let current = 0;

    // console.log(copy,'original array');

    while (copy.length > 1) {
        counter = 0;
        end = copy.length-1;
        console.log(copy, current);
        if (copy[end] > copy[0]) {
            copy.shift();
        } else if (copy[end] < copy[0]) {
            copy.pop();
        } else if (copy[end] === copy[0]) {
            while (copy[0 + counter] === copy[end - counter]) {
                counter += 1;
            }
            if (copy[0 + counter] > copy[end - counter]) {
                copy = copy.slice(0, end - counter+1);
            } else if (copy[end - counter] > copy[0 + counter]) {
                copy = copy.slice(1 + counter);
            }
        }
        current = copy.reduce((a, b) => a + b, 0);
        if (current > max) max = current;
    }

    return max
}
  console.log(maxSequence([]), '|| should return 0');
  console.log(maxSequence([-1,-2,-3]), '|| should return 0');
  console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), '|| should return 6');
  console.log(maxSequence([ -14, 46, -6, -8, 20, 7, 6, -47, -30, -1, 26, 45, -2, -23, -8, -49, -19, -18, -32, 13, 41 ]), 'should return 71');
  console.log(maxSequence(
[14,
26,
-22,
35,
-45,
-9,
-10,
17,
-24,
32,
-7,
-48,
-25,
-7,
13,
-12,
42,
-30,
14,
-45,
-34,
-37,
-13,
39,
15,
-32,
-39,
-7,
28,
-43,
-24,
13,
-28,
40,
20,
24,
-29,
13,
2,
31,
-33,
-46,
24,
-12,
-31,
0,
-19,
38,
4,
-11,
-3,
47,
19,
24,
-12,
-43,
-19,
23,
-26,
-36,
10]), 'should return 118');

// The maximum sum subarray problem consists in finding the maximum sum 
// of a contiguous subsequence in an array or list of integers:
// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// ^ should be 6: [4, -1, 2, 1]

// Easy case is when the list is made up of only positive numbers and the 
// maximum sum is the sum of the whole array. If the list is made up of only 
// negative numbers, return 0 instead.
// Empty list is considered to have zero greatest sum. 
// Note that the empty list or array is also a valid sublist/subarray.