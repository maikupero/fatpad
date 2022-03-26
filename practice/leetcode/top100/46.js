// Summary of Best Solution


/*
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
    if (board.length === 0) return false

    const col = board.length // Number of rows
    const row = board[0].length // Number of els in a row

    const dirs = [[-1,0],[0,1],[1,0],[0,-1]]

    function search(y,x,i) {
        // Break cases (letter not matching the letter of the word) or finding the whole word
        if (board[y][x] !== word[i]) return false;
        if (i === word.length-1) return true;

        board[y][x] = '*';
        for (const [dy,dx] of dirs) {
            const a = x+dx;
            const b = y+dy;
            if (a >= 0 && a < row && b >= 0 && b < col) {
                if (search(b, a, i+1)) return true
            }
        }
        board[y][x] = word[i];
        return false;
    }

    for (let y = 0; y < col; y++) {
        for (let x = 0; x < row; x++) {
            if (search(y, x, 0)) return true
        }
    }

    return false
};


board1 = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
word1 = "ABCCED"
expected1 = true
board2 = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
word2 = "SEE"
expected2 = true
board3 = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
word3 = "ABCB"
expected3 = false
 
console.log(`||| TESTED with target ${board1, word1} \n||| RETURNS: ${exist(board1, word1)}\n||| EXPECTED: ${expected1}`)
console.log(`||| TESTED with target ${board2, word2} \n||| RETURNS: ${exist(board2, word2)}\n||| EXPECTED: ${expected2}`)
console.log(`||| TESTED with target ${board3, word3} \n||| RETURNS: ${exist(board3, word3)}\n||| EXPECTED: ${expected3}`)

// 79. Word Search
// https://leetcode.com/problems/word-search/
// Given an m x n grid of characters board and a string word, return true if word exists in the grid.
// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.


 

// Constraints:
// m == board.length
// n = board[i].length
// 1 <= m, n <= 6
// 1 <= word.length <= 15
// board and word consists of only lowercase and uppercase English letters.
 
// Follow up: Could you use search pruning to make your solution faster with a larger board?