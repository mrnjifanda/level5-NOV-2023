const express = require('express');
const router = express.Router();
const Auth = require('../middlewares/auth');


router.get('/', Auth, (req, res, next) => {

    const user = req.user;
    res.render('admin/dashboard', { 
        title: "Admin page ",
        user
    });
});

router.get('/user/:id', Auth, (req, res, next) => {

    const id = req.params.id;
    const users = [
        { name: "Billy", email: "billy@gmail.com"},
        { name: "Seven", email: "seven@gmail.com"},
        { name: "Academy", email: "academy@gmail.com"}
    ];

    res.render('admin/user', {
        title: 'User with id: ' + id,
        id: id,
        users: users
    })
});


module.exports = router;