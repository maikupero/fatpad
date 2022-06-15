// You are given an initial function named promisify, and it receives two arguments: 
// fn (type: function) and hasCallback (type: Boolean, default: true). 
// 
// Originally the function returns another function that receives the args object (containing the arguments) from the parent function. 
// The promisify function needs to be updated in order to satisfy the following requirements:
// 1. It must convert the function passed in the parameter fn into a Promise object (thus it can resolve/reject)
// 2. When the hasCallback parameter is true, fn is a function implementing the callback pattern (error, response) => {}.
// 3. When the hasCallback parameter is false, fn is a regular function.
        // 4. If a non-function type is passed as the fn argument, invalid (string) should be returned.
// 5. When a function is promisified, it can receive any number of arguments.


// https://www.tutorialspoint.com/node-js-util-promisify-method