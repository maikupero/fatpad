import axios from 'axios';
import fetch from 'node-fetch';

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/todos';
// get only even numbered users whose todo is completed.

// check response.ok and .json() with fetch
// remember .data with axios.

async function fetchData() {
    try {
        const response = await fetch(API_ENDPOINT);
        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }
        return await response.json();
    }
    catch (error) {
        console.error(error);
    }
}

const getData = async () => {
    try {
        const res = await axios.get(API_ENDPOINT);
        return res.data;
    }
    catch (err) {
        console.error(err);
    }
}

async function getEvens() {
    let todos = await fetchData();
    function checkEvens(todo) {
        return ((todo.completed) && (todo.userId % 2 === 0) && (todo.id % 2 === 0))
    }

    let res = todos.filter(checkEvens);
    return res
}

console.log(await getEvens());