const express = require('express');
const fs = require('fs');
const path = require('path');

const db_path = path.join(__dirname, '../db/articles.json');

const router = express.Router();

router.get('/', (req, res, next) => {

    res.render('admin/dashboard');
});

router.get('/add', (req, res, next) => {

    const categories = ['Food', 'Car', 'Sport'];
    res.render('admin/add', { 'categories': categories });
});

router.post('/create', (req, res) => {


    const body = req.body;
    const articles = fs.readFileSync(db_path);
    if (articles.length <= 0) {

        let blog = [];
        blog.push(body);
        fs.writeFileSync(db_path, JSON.stringify(blog));
    } else {
        let parse_article = JSON.parse(articles);
        parse_article.push(body);
        fs.writeFileSync(db_path, JSON.stringify(parse_article));
    }

    res.redirect('/');
})

module.exports = router;