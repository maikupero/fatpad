// https://www.educative.io/edpresso/function-composition-in-javascript

// Function composition is an approach where the result of one function is passed on to the next function, 
// which is passed to another until the final function is executed for the final result.
// Function compositions can be composed of any number of functions.

const double = x => x * 2
const square = x => x * x

// Traditional approach
let output1 = double(2);
let output2 = square(output1);
console.log(output2);
// variation of that. Sending output of one function as input to the next. very literal.
let final1 = square(double(2));
console.log(final1);

// Another approach is to use the compose and pipe functions.
// function composition
const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x); 
let final2 = compose(square, double)(3);
console.log(final2); 

// function pipe
const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x); 
var final3 = pipe(square, double)(3);
console.log(final3);





// https://itnext.io/write-better-javascript-function-composition-with-pipe-and-compose-93cc39ab16ee

const compose = (a, b, c) => (x) => a(b(c(x)));
const discount = compose(normalizePrice, divide100, multiply20);
discount(200.0); //40.00

// Our compose function makes the code more readable and cleaner but we can improve it to accept more than three functions 
// using the higher-order reduceRight function:

const compose =
  (x) =>
    fns.reduceRight((res, fn) => fn(res), x);

// what we are doing is that using the spread operator we are transforming the arguments (our functions) into an array and return a 
// new function that takes an argument “X” that will be used as the initial value of the accumulator of our reduceRight function. 
// We are basically executing every function passed as an argument from right to left with the result of the previous one.

// So if we now want to add a new function to add a ‘$’ prefix to our discount we can simply add it to the compose arguments list
const addPrefix = (price) => "$" + String(price); //$ 40.00
const discountWithPrefix = compose(
  addPrefix,
  normalizePrice,
  divide100,
  multiply20
);
discountWithPrefix(200.0); // '$40.00'


// Pipe works the exact same way as Compose, the only difference is that instead of executing arguments from right to left, 
// it executes them from left to right, we can implement a Pipe function like this:
const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((res, fn) => fn(res), x);
// the only difference is that reduceRight has become reduce. 



// Or use libraries like Ramda: https://ramdajs.com/docs/#compose