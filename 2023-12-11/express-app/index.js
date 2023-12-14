const express = require('express');
const app = express();

app.get('/', (request, response) => {

    response.send("Hello World !!!");
});

app.get('/about-us', (request, response) => {

    response.send('This is about page');
});

app.listen(4000, () => {
    console.log("Application listening on http://localhost:4000");
});
