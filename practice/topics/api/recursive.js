import fetch from 'node-fetch';

const API_ENDPOINT = 'https://randomuser.me/api';
const COUNT = 4;

async function getData() {
    try {
        const response = await fetch(API_ENDPOINT);
        if (!response.ok) {
            throw new Error(`Error!! ${response.status}`);
        }
        return await response.json();
    }
    catch (err) {
        console.error(err);
    }
}

async function getUsers(n) {
    const users = [];
    for (let i = 0; i < n; i++) {
        users.push(await getData())
        console.log(`Got: ${users.length}`);
    }
    return users
}

async function getResults(n) {
    let users = await getUsers(n);
    let desirableData = ['first','last','country','username','password']
    const resultData = [];
    let singleResult = [];

    function iterateObject(obj) {
        for (let prop in obj) {
            if (typeof(obj[prop]) == 'object') {
                iterateObject(obj[prop]);    
            }
            if (desirableData.includes(prop)) {
                singleResult.push(prop);
                singleResult.push(obj[prop]);
            }
        }
    }

    for (let i = 0; i < users.length; i++) {
        iterateObject(users[i]);
        let composedResult = new Map();
        for (let i = 0; i < singleResult.length; i += 2) {
            composedResult.set(`${singleResult[i]}:`, singleResult[i+1])
        }
        resultData.push(composedResult);
        singleResult = [];
    }

    return resultData
}

console.log(await getResults(COUNT));