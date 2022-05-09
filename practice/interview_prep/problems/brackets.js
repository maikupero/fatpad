// # https://www.hackerrank.com/challenges/balanced-brackets

// https://leetcode.com/problems/valid-parentheses/discuss/485550/100-Time-With-Optimizations-%2B-Explanation

// If you flip the dictionary, instead of using a stack you'll have to use a queue. 
// With a queue you have to use the unshift() and shift() methods and those operations 
// are in O(n) versus using O(1) with pop() and push(). 

function isBalanced(s) {
    // Base cases.
    if (s.length === 0) return true
    if (s.length === 1) return false
    if (s.length % 2 !== 0) return false

    // What type of data, how are we gonna organize what we're getting? A stack.
    const brackets = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    const stack = []

    for (let i = 0; i < s.length; i++) {
        const curr = s[i];
        const last = stack[stack.length - 1];
        const del = brackets[curr];

        // So if we find one that can't be popped, return false. 
        if (del) {
            if (del === last) {
                stack.pop()
            } else {
                return 'NO'
            }
        } else {
            stack.push(curr)
            console.log(stack)
        }
    }

    return (!stack.length) ? 'YES' : 'NO'
};

let test1 = '{[()]}'
let test2 = '{[(])}'
let test3 = '{{[[(())]]}}'
let expected1 = 'YES' 
let expected2 = 'NO'
let expected3 = 'YES'

console.log(`Test 1, from ${test1} yields ${isBalanced(test1)}, expected ${expected1}`)
console.log(`Test 1, from ${test2} yields ${isBalanced(test2)}, expected ${expected2}`)
console.log(`Test 1, from ${test3} yields ${isBalanced(test3)}, expected ${expected3}`)

// bracket is considered to be any one of the following characters: (, ), {, }, [, or ].
// # Two brackets are considered to be a matched pair if the an opening bracket (i.e., (, [, 
// # or {) occurs to the left of a closing bracket (i.e., ), ], or }) of the exact same type. 
// # There are three types of matched pairs of brackets: [], {}, and ().

// # A matching pair of brackets is not balanced if the set of brackets it encloses are not matched. For example, {[(])} is not balanced because the contents in between { and } are not balanced. The pair of square brackets encloses a single, unbalanced opening bracket, (, and the pair of parentheses encloses a single, unbalanced closing square bracket, ].

// # By this logic, we say a sequence of brackets is balanced if the following conditions are met:

// # It contains no unmatched brackets.
// # The subset of brackets enclosed within the confines of a matched pair of brackets is also a matched pair of brackets.
// # Given  strings of brackets, determine whether each sequence of brackets is balanced. If a string is balanced, return YES. Otherwise, return NO.

// # Function Description

// # Complete the function isBalanced in the editor below.

// # isBalanced has the following parameter(s):

// # string s: a string of brackets
// # Returns

// # string: either YES or NO
// # Input Format

// # The first line contains a single integer , the number of strings.
// # Each of the next  lines contains a single string , a sequence of brackets.

// # Constraints

// # , where  is the length of the sequence.
// # All chracters in the sequences ∈ { {, }, (, ), [, ] }.
// # Output Format

// # For each string, return YES or NO.

// # Sample Input

// # STDIN           Function
// # -----           --------
// # 3               n = 3
// # {[()]}          first s = '{[()]}'
// # {[(])}          second s = '{[(])}'
// # {{[[(())]]}}    third s ='{{[[(())]]}}'
// # Sample Output

// # YES
// # NO
// # YES
// # Explanation

// # The string {[()]} meets both criteria for being a balanced string.
// # The string {[(])} is not balanced because the brackets enclosed by the matched pair { and } are not balanced: [(]).
// # The string {{[[(())]]}} meets both criteria for being a balanced string.