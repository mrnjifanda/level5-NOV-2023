const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  
  res.render('index', { title: 'Blog' });
});

router.get('/about-us', function(req, res) {

  res.render('about', { title: 'About us'});
});

router.get('/contact-us', function(req, res) {

  res.render('contact', { title: 'Contact us'});
});

router.get('/blog', function(req, res) {

  res.render('blog', { title: 'Blog'});
});

module.exports = router;
