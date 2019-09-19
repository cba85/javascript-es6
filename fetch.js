// Fetch API
const fetch = require("node-fetch");

fetch('https://jsonplaceholder.typicode.com/users').then(async response => {
    console.log(await response.json())
});