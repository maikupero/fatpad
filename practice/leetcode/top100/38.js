// Summary of Best Solution
// Feel like I understand this one very well actually.
// I imagine you generally want to make a dict:
// key with the sorted letters of str, value with the str.
// can compare the strings to the keys in various ways,
// if they match, add to that value list. if not make a new k-v.
// return values.
// Would definitely benefit from not doing javascript. 

// Want to understand: 
// https://leetcode.com/problems/group-anagrams/discuss/327706/javascript-7-line-solution-using-Primes-beats-99.8-without-sorting

/*
 * @param {number[]} nums
 * @return {number[][]}
*/
var groupAnagrams = function(strs) {
    if (strs.length < 2) return [strs]
    let resultsDict = {};

    for (str of strs) {
        sorted_str = Array.from(str).sort().join('');
        if (sorted_str in resultsDict) {
            resultsDict[sorted_str].push(str);
        } else {
            resultsDict[sorted_str] = [str];
        }
    }
    
    return Object.values(resultsDict)
};


test1 = ["eat","tea","tan","ate","nat","bat"]
expected1 = [["bat"],["nat","tan"],["ate","eat","tea"]]
test2 = [""]
expected2 = [[""]]
test3 = ["a"]
expected3 = [["a"]]
 
console.log(`||| TESTED with target ${test1} \n||| RETURNS: ${groupAnagrams(test1)}\n||| EXPECTED: ${expected1}`)
console.log(`||| TESTED with target ${test2} \n||| RETURNS: ${groupAnagrams(test2)}\n||| EXPECTED: ${expected2}`)
console.log(`||| TESTED with target ${test3} \n||| RETURNS: ${groupAnagrams(test3)}\n||| EXPECTED: ${expected3}`)

// 49. Group Anagrams
// https://leetcode.com/problems/group-anagrams/
// Given an array of strings strs, group the anagrams together. 
// You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

// Constraints:
// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.