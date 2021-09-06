// ------------------ Twice Linear ------------------
// https://www.codewars.com/kata/5672682212c8ecf83e000050/train/javascript 

function dblLinear(n) {
    front = [1];
    two = [];
    three = [];
    for (x = 0; x < n; x++) {
        two.push(2 * front[x] + 1);
        three.push(3 * front[x] + 1);
        // wtf jesus que god
        front.push(Math.min(two[0],three[0]));

        if (two[0] === three[0]) {
            two.shift(); three.shift();
        } else {
        two[0] < three[0] ? two.shift() : three.shift();
        }
    }
    return front[n]
}
console.log(dblLinear(23))

//add lowest value, push higher value to other array. 
//sort it as i build the array.
//https://stackoverflow.com/questions/60052873/how-to-implement-deque-data-structure-in-javascript






//     unsorted   value        sorted index
// 1 ->  2 3        3  4
// 2 -> 4 5         7 10
// 3 -> 6 7         9 13
// 4 -> 8 9        15 22
// 5 -> 10 11      21 31
// 6 -> 12 13      19 28
// 7 -> 14 15      27 40

// Consider a sequence u where u is defined as follows:

// The number u(0) = 1 is the first one in u.
// For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
// There are no other numbers in u.
// Example:
// u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]

// 1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...

// Task:
// Given parameter n the function dbl_linear (or dblLinear...) returns the element u(n) of the ordered sequence u (ordered with < so there are no duplicates) .

// Example:
// dbl_linear(10) should return 22

// Note:
// Focus attention on efficiency


// # Consider a sequence u where u is defined as follows:

// # The number u(0) = 1 is the first one in u.
// # For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
// # There are no other numbers in u.
// # Example:
// # u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]

// # 1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...

// # Task:
// # Given parameter n the function dbl_linear (or dblLinear...) returns the element u(n) of the ordered sequence u (ordered with < so there are no duplicates) .

// # Example:
// # dbl_linear(10) should return 22

// # Note:
// # Focus attention on efficiency


// # def dbl_linear(n, array = [1]):
// #     for num in range(n):
// #         array.extend([2array[num]+1, 3array[num]+1])
// #         # if array.count(2array[num]+1) == 0: array.append(2array[num]+1)
// #         # if array.count(3array[num]+1) == 0: array.append(3*array[num]+1)
// #     print(sorted(list(set(array))))
// #     return sorted(list(set(array)))[n]

// print(dbl_linear(30))

// # [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, 28, 31, 39, 40, 43, 45, 46, 55, 57, 58, 63, 
// # 64, 67, 81, 82, 85, 87, 91, 93, 94, 121, 129, 130, 135, 136, 139, 193, 202]

// # [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, 28, 31, 39, 40, 43, 45, 46, 55, 57, 58, 63, 
// # 64, 67, 81, 82, 85, 87, 91, 93, 94, 121, 130, 135, 136, 139, 202]