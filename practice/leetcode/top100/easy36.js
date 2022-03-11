// Summary of Best Solution
// https://leetcode.com/problems/permutations/discuss/685868/DFSbacktracking-PythonJavaJavascript-PICTURE
// Classic combinatorial search problem, we can solve it using 3-step system

// 1. Identify states
// What state do we need to know whether we have reached a solution (and using it to construct a solution if the problem asks for it).
//   We need a state to keep track of the list of letters we have chosen for the current permutation
// What state do we need to decide which child nodes should be visited next and which ones should be pruned?
//   We have to know what are the letters left that we can still use (since each letter can only be used once).

// 2. Draw the State-space Tree
//                                 []
//                   [a]           [b]          [c]
//              [a,b]  [a,c]  [b,a]  [b,c]  [c,a]  [c,b]
//             [a,b,c][a,c,b][b,a,c][b,c,a][c,a,b][c,b,a]

// 3. DFS on the State-space tree
// Using the backtracking template as basis, we add the two states we identified in step 1:

// A list to represent permutation constructed so far, path
// A list to record which letters are already used, used, used[i] == true means ith letter in the origin list has been used.
// Recommended: https://algo.monster/problems/backtracking

// Shape of these permutation/dfs style functions is: result list, call the function, it goes through all the possible perms, returns results.
// shape of the dfs function: 
    // if break case return (when it gets as long as our original list)
    // for each element in the original list:
    //     skip if used before (if true)
    //     else, build a new path, and mark that as used. 
    //     send this new path into the same function.
    //     clean out the start of path and mark it as unused. 
    //     go on to the next element.
    
/*
 * @param {number[]} nums
 * @return {number[][]}
*/
 var permute = function(letters) {
    let permutations = [];
    dfs(letters, [], Array(letters.length).fill(false), permutations);
    return permutations

    function dfs(letters, path, used, permutations) {
        if (path.length === letters.length) {
            permutations.push(Array.from(path));
            return
        }

        for (let i = 0; i < letters.length; i++) {
            // Skip used letters
            if (used[i]) continue;
            // Add letter to current perm and mark as used
            path.push(letters[i]);
            used[i] = true;
            dfs(letters, path, used, permutations);
            // Remove letter from permutation, mark letter as unused
            path.pop();
            used[i] = false;
        }
    }
};


test1 = [1,2,3]
expected1 = [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
test2 = [0,1]
expected2 = [[0,1],[1,0]]
test3 = [1]
expected3 = [[1]]
 
console.log(`||| TESTED with target ${test1} \n||| RETURNS: ${permute(test1)}\n||| EXPECTED: ${expected1}`)
console.log(`||| TESTED with target ${test2} \n||| RETURNS: ${permute(test2)}\n||| EXPECTED: ${expected2}`)
console.log(`||| TESTED with target ${test3} \n||| RETURNS: ${permute(test3)}\n||| EXPECTED: ${expected3}`)

// 46. Permutations
// https://leetcode.com/problems/permutations/
// There is an integer array nums sorted in ascending order (with distinct values).
// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

// Constraints:
// 1 <= nums.length <= 6
// -10 <= nums[i] <= 10
// All the integers of nums are unique.