// https://apipheny.io/free-api/
// https://gist.github.com/fgilio/230ccd514e9381fafa51608fcf137253
// Task I've set for myself: Get 5 suggestions of activities to do that are free.
// Sample object:
// {
//     activity: "Take a caffeine nap",
//     type: "relaxation",
//     participants: 1,
//     price: 0.1,
//     link: "",
//     key: "5092652",
//     accessibility: 0.08
// }
// https://www.boredapi.com/api/activity


// So in sum:
// Axios - 
    // 3rd party 
    // can be imported with require and run without package.json
    // does .json() for you
    // works with async await instead of creating a promise.
    //  promises use .then and .catch, async/await uses try and catch.

const axios = require('axios').default;
const API_ENDPOINT = 'https://www.boredapi.com/api/activity';


async function getData() {
    try {
        const res = await axios.get('https://www.boredapi.com/api/activit');
        if (!res.data.error == 'OK') {
            return res.data;
        } else {
            throw new Error(`Error!! ${res.data.error}`);
        }
    } catch (err) {
        console.log(err);
    }
}

// async function getData() {
//     const json = await axios.get(API_ENDPOINT);
//     return json.data
// }

function composeResults(map) {
    console.log("Or, if you're looking for free activities:")
    map.forEach((act) => {
        console.log(`${act.activity} ${act.link ? act.link : ""}`);
    })
}

async function handleData(n) {
    const results = new Map();
    for (let i = 1; i < n+1; i++) {
        let data = await getData();
        while (data.price > 0) {
            console.log(`${data.activity} for about $${data.price * 100}`);
            data = await getData();
        }
        results.set(`User ${i}`, data);
    }

    composeResults(results);
}

handleData(5);