// movement is non-euclidian. moving diagonally counts the same as moving in a cardinal direction.

// +------------------------+
// | 10 | 10 | 10 | 10 | 10 |
// +------------------------+
// | 10 |  5 |  5 |  5 | 10 |
// +------------------------+
// | 10 |  5 | :) |  5 | 10 |
// +------------------------+
// | 10 |  5 |  5 |  5 | 10 |
// +------------------------+
// | 10 | 10 | 10 | 10 | 10 |
// +------------------------+
// Create an algorithm to calculate the distance of a movement path. 
// You will be provided with the path as a series of absolute grid points (x, y, z). 
// Take into account both horizontal (x, y) as well as vertical (z) movement. 
// Vertical movement is governed by the same rules, for the sake of simplicity.

function calcDistance(path) {
    let distance = 0;

    for (let i = 0; i < path.length - 1; i++) {
        let start = path[i];
        let finish = path[i + 1];
        let travel = [];

        for (let j = 0; j < start.length; j++) {
            travel.push(Math.abs(finish[j] - start[j]));
        }

        distance += Math.max(...travel) * 5
    }
    
    return distance
}
//our tests
//as long as  -y2 <= x2 <= y2 
// then distance is 10
// [x1, y1]  -> [x2, y2] -> distance



//tests 

console.log(calcDistance([[2, 2, 0], [1, 2, 0]]));
console.log(calcDistance([[2, 2, 0], [0, 2, 0]]));
console.log(calcDistance([[0, 0, 0], [0, 0, 3]]));
console.log(calcDistance([[0, 0, 0], [1, 4, 5]]));
console.log(calcDistance([[0, 0, 4], [0, 0, -1]]));
console.log(calcDistance([[0, 0, 0], [-2, -1, 0]]));
console.log(calcDistance([[0, 0, 0], [-3, -4, -2]]));