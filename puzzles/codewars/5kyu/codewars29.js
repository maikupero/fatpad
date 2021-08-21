function validParentheses(parens){
    let to_match = 0;

    for (let x in parens) { 
        parens[x] === '(' ? to_match += 1 : to_match -= 1
        if (to_match === -1) return false
    }

    return to_match === 0;
}

console.log(validParentheses("()"), true);
console.log(validParentheses("())"), false);
console.log(validParentheses("(())((()())())"), true);
console.log(validParentheses("(()()))("), false);


// Write a function that takes a string of parentheses, 
// and determines if the order of the parentheses is valid.
// The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100