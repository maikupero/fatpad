// ------------------ Multiplication Table ------------------
// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08

function multiplicationTable(size) {
    let table = [];
    let next_Set = [];

    for (let x = 1; x < size + 1; x++) {
        next_Set = [];
        for (let y = x; y <= size * x; y += x) {
            next_Set.push(y);
        }
        table.push(next_Set);
    }

    return table
}
console.log(multiplicationTable(3), [[1,2,3], [2,4,6], [3,6,9]]);

// Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

