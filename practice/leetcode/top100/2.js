// Best solution:

// Solution for their specific prompt which fails sequences if different order at any point:
var isValid = function(s) {
    const open = ["(","{","["];
    const close = {
        ")": "(",
        "}": "{",
        "]": "["
    }
    let queue = ["buffer"];

    for (x in s) {
        if (open.includes(s[x])) {
            queue.push(s[x]);
        } else {
            if (close[s[x]] === queue[queue.length-1]) {
                queue.pop();
            } else {
                return false
            }
        }
    }

    return queue.length === 1
}
// My simple solution for checking right amounts in right order: 
var isValid2 = function(s) {
    const open = ["(","{","["];

    const close = {
        ")": "(",
        "}": "{",
        "]": "["
    }
    let queue = {
        "{": 0,
        "(": 0,
        "[": 0
    };

    for (letter of s) {
        console.log(letter, queue);

        if (open.includes(letter)) {
            queue[letter] += 1;
        } else {
            if (queue[close[letter]] === 0) {
                return false
            } else {
                queue[close[letter]] -= 1;
            }
        }
    }

    return Object.values(queue).reduce((a,b) => a+b, 0) === 0
};

// Given Examples
example1 = "()";
output1 = true;
example2 = "()[]{}";
output2 = true;
example3 = "(]";
output3 = false;

console.log(`Example 1: ${example1} yields: ${isValid(example1)}, expected: ${output1}`);
console.log(`Example 2: ${example2} yields: ${isValid(example2)}, expected: ${output2}`);
console.log(`Example 3: ${example3} yields: ${isValid(example3)}, expected: ${output3}`);

// My created test cases
test1 = "({{}})"
expected1 = true
test2 = "({[}])"
expected2 = false
test3 = "({[]}}"
expected3 = false
console.log(`Test 1: ${test1} yields: ${isValid(test1)}, expected: ${expected1}`)
console.log(`Test 2: ${test2} yields: ${isValid(test2)}, expected: ${expected2}`)
console.log(`Test 3: ${test3} yields: ${isValid(test3)}, expected: ${expected3}`)

// Failed this test case because the prompt is unclear. Give me more examples. What. 
// Knowing this would be failed, I would've just coded in a queue stack.
failed = "([)]"
failresult = false
console.log(`Failed: ${failed} yields: ${isValid(failed)}, expected: ${failresult}`);

// 20. Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 

