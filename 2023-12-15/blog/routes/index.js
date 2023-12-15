var express = require('express');
const fs = require('fs');
const path = require('path');

const db_path = path.join(__dirname, '../db/articles.json');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const get_articles = fs.readFileSync(db_path);
  const articles = JSON.parse(get_articles);
  res.render('index', { title: 'Express', 'articles': articles });
});

module.exports = router;
