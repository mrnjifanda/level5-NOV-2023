const express = require('express');
const router = express.Router();

router.get('/:id', (req, res, next) => {

    res.render('blog/single');
});

module.exports = router;