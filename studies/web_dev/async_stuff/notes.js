// https://youtu.be/670f71LTWpM

// fetch & filesystem module inside node
const fetch = require('node-fetch');
const fs = require('fs');

//********** Callbacks ***********

//setTimeout
setTimeout(() => {
    console.log('Waited 1 second');
}, 1000);

// Nested setTimeouts
setTimeout(() => {
    console.log('3');
    setTimeout(() => {
        console.log('2')
        setTimeout(() => {
            console.log('1')
        }, 1000);
    }, 1000);
}, 1000);

// button event handler in browser JS, just for example of a callback.
let btn;
btn.addEventListener('click', () => {

})

// error first callback
// shows data
fs.readFile('./input.txt', {encding:'utf-8'}, (err, data) => {
    console.log(data);
}) 

// undefined shows as there was an err, no data. 
fs.readFile('./input2.txt', {encding:'utf-8'}, (err, data) => {
    console.log(data);
}) 

// more common is:
fs.readFile('./input.txt', {encoding:'utf-8'}, (err, data) => {
    if (err) {
        console.error("ERROR");
        console.error(err);
    } else {
        console.error("GOT DATA");
        console.log(data);
    }
}); 
// if an error is thrown it will log it all out.

// Error-first callback, promises and async await, with asynchronous things sometimes things go wrong, this is how to be prepared.

// Creating a promise - pass a function that accepts a resolve and a reject callback. 
// Always have a success path and a fail path. then return one of above.
const myPromise = new Promise((resolve, reject) => {
    const rand = Math.floor(Math.random() * 2);
    console.log(rand);
    if (rand === 0) {
        resolve();
    } else {
        reject();
    }
});

// .then will take a callback function, log something like success.
// myPromise
//     .then(() => console.log('Success'))
//     .catch(() => console.error('Something went wrong'));


// Alternatively, just use an existing promise..
// fs.promises
//     .readFile('./input.txt',{encoding:'utf-8'})
//         .then(data => console.log(data))
//         .catch(err => console.error(err))

// Or use fetch api with promises
// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//     .then((data) => console.log(data)) 
//     .catch((err) => console.error(err))
// This'll give us a big amount of data, but we want the json from the response so...

// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//     // Gives us a promise back, so just chain on another then
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err))



// Evolution of promises to async/await
const loadFile = async () => {
    const data = await fs.promises.readFile('./input.txt', {
        encoding: 'utf-8',
    });
    console.log(data);
};

// Mark function as async -> inside, you can use await. 
// Which means, instead of passing callbacks / .thens, add await and get the data. 
// But, what if there's an error?
const loadFile2 = async () => {
    try {
        const data = await fs.promises.readFile('./input2.txt', {
            encoding: 'utf-8',
        });
        console.log(data);
    } catch (error) {
        console.error(error);
    }
};



// So let's combine the async/await with fetch api
const fetchPokemon = async (id) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();
        console.log(data)
    } catch(err) {
        console.error(err);
    }
};
fetchPokemon(0);