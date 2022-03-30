// Summary of Best Solution
// Was under the impression these were sorted. So my solution worked for that.
// But apparently not. Eh. Mine is just messy and misses exception cases. 
// This case showed me I had the wrong idea about it: [[2,3],[4,5],[6,7],[8,9],[1,10]]

var merge = function(intervals) {
    if (!intervals.length) return intervals
    intervals.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1])

    let prev = intervals[0]
    let res = [prev]
    
    for (let curr of intervals) {
        if (curr[0] <= prev[1]) {
            prev[1] = Math.max(prev[1], curr[1]);
        } else {
            res.push(curr);
            prev = curr;
        }
    }
    return res
}

/*
 * @param {number[]} nums
 * @return {number[][]}
*/
var merge2 = function(intervals) {
    let start = 0, end = 0;

    while (end < intervals.length-1) {
        end = start + 1;

        if (!overlap(intervals[start],intervals[end])) {
            start++;
        } else {
            while (intervals[end] && overlap(intervals[start],intervals[end])) {
                intervals[end][0] = Math.min(intervals[start][0], intervals[end][0]);
                intervals[end][1] = Math.max(intervals[start][1], intervals[end][1]);
                intervals.splice(start, 1);
            }
        }  
    }

    return intervals

    function overlap(a, b) {
        return (
            ( (Math.max(a[0],a[1]) >= Math.min(b[0],b[1])) && (Math.max(a[0],a[1]) <= Math.max(b[0],b[1])) ) 
            || 
            ( (Math.max(b[0],b[1]) >= Math.min(a[0],a[1])) && (Math.max(b[0],b[1]) <= Math.max(a[0],a[1])) )
        ) 
    }
};


test1 = [[1,3],[2,6],[8,10],[15,18]]
expected1 = [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
test2 = [[1,4],[4,5]]
expected2 = [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
test3 = [[1,4],[0,4]]
expected3 = [[0,4]]
test4 = [[1,4],[0,2],[3,5]]
expected4 = [[0,5]]


console.log(`||| TESTED with target ${test1} \n||| RETURNS: ${merge(test1)}\n||| EXPECTED: ${expected1}`)
console.log(`||| TESTED with target ${test2} \n||| RETURNS: ${merge(test2)}\n||| EXPECTED: ${expected2}`)
console.log(`||| TESTED with target ${test3} \n||| RETURNS: ${merge(test3)}\n||| EXPECTED: ${expected3}`)
console.log(`||| TESTED with target ${test4} \n||| RETURNS: ${merge(test4)}\n||| EXPECTED: ${expected4}`)

// 56. Merge Intervals
// https://leetcode.com/problems/merge-intervals/
// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, 
// and return an array of the non-overlapping intervals that cover all the intervals in the input.
 
// Constraints:
// 1 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 104