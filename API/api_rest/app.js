const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {

    // res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Type', 'application/json');
    res.json('<h1>Hello World</h1>');
});

app.listen(port, () => {
    console.log('Application listening on port ' + port);
});
