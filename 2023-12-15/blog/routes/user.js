const express = require('express');
const router = express.Router();

function verifyIdParamMiddleware(req, res, next) {

    if (req.params.id) {
        next();

    } else {
        res.send('Please id param is required');
    }
}

router.get('/users', (req, res) => {

    res.send('Users route');
});

router.get("/users/:hello", (req, res) => {
    const hello = req.params.hello;
    res.send("Route call with paramater: " + hello);
});

router.get("/users/:hello/:id", verifyIdParamMiddleware, (req, res) =>  {

    const user = req.user;
    /*
    {
        name: 'seven',
        email: 'seven@gmail.com'
     }
    */
    const hello = req.params.hello;
    const id = req.params.id;

    res.send("Route call with params hello: " + hello + " and id: " + id);
});