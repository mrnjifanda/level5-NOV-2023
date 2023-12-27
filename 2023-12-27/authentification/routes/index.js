const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/register', (req, res, next) => {
  res.render('register');
});

router.post('/register', async (req, res, next) => {

  const errors = [];
  const body = req.body;
  if (body.password !== body['confirm-password']) {
    errors.push({'confirm-password': 'Password don\'t match !!!'});
  }

  const user = await User.findOne({ email: body.email });
  if (user) {
    errors.push({'email': 'User already exist, please change !!!'});
  }

  if (errors.length != 0) {

    res.render('register', {
      errors: errors,
      body: body
    })

    return ;
  }

  const hashPassword =  bcrypt.hashSync(body.password, 10);
  const newUser = new User({
    firtsName: body.firtsName,
    lastName: body.lastName,
    email: body.email,
    password: hashPassword
  });

  await newUser.save();
  res.redirect('/?message=register+successfully');
});



module.exports = router;
