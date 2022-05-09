// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get

class Example {
    response = 'got world!';
    get hello() {
        return this.response
    }
}

const test1 = new Example();
console.log(test1.hello);


// What's happening here.
class Example2 {
    response = 'returned World!!!';
    hello() {
        return this.response
    }
}

const test2 = new Example2();
console.log(test2.hello)


// What's the difference between constructor and no constructor in 2 and 3? JS does a constructor anyways if not explicit, right?
class Example3 {
    constructor() {
        this.response = 'World!!!';
    }
    hello() {
        return this.response
    }
}