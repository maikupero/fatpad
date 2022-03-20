// Summary of Best Solution
https://leetcode.com/problems/minimum-path-sum/discuss/502072/Javascript-95-Speed-O(mn)-time-O(1)-space-w-comments
/**
 * @param {number[][]} grid
 * @return {number}
 */
 var minPathSum = function(grid) {
    let col = grid.length;
    let row = grid[0].length;

    // Set leftmost column and topmost row. (value += previous value)
    for (let y = 1; y<col; y++) {
        grid[y][0] += grid[y-1][0];
    }
    for (let x = 1; x<row; x++) {
        grid[0][x] += grid[0][x-1];
    }

    // Set each value += the min of the two left and up of it.
    for (let y=1; y<col; y++) {
        for (let x=1; x<row; x++) {
            grid[y][x] += Math.min(grid[y-1][x], grid[y][x-1]);        
        }
    }

    return grid[col-1][row-1];
};

test1 = [[1,3,1],[1,5,1],[4,2,1]]
expected1 = 7
// Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.
test2 = [[1,2,3],[4,5,6]]
expected2 = 12
 
console.log(`||| TESTED with target ${test1} \n||| RETURNS: ${minPathSum(test1)}\n||| EXPECTED: ${expected1}`)
console.log(`||| TESTED with target ${test2} \n||| RETURNS: ${minPathSum(test2)}\n||| EXPECTED: ${expected2}`)
// console.log(`||| TESTED with target ${test3} \n||| RETURNS: ${merge(test3)}\n||| EXPECTED: ${expected3}`)
// console.log(`||| TESTED with target ${test4} \n||| RETURNS: ${merge(test4)}\n||| EXPECTED: ${expected4}`)

// 64. Minimum Path Sum
// https://leetcode.com/problems/minimum-path-sum/
// Given a m x n grid filled with non-negative numbers, 
// find a path from top left to bottom right, 
// which minimizes the sum of all numbers along its path.
// Note: You can only move either down or right at any point in time.

// Constraints:
// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 200
// 0 <= grid[i][j] <= 100