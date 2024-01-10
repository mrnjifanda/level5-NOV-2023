const { Router } = require('express');
const router = Router();

const indexController = require('../controllers/index.controller');

router.get('/', indexController.home);
router.get('/about-us', indexController.about);

module.exports = router;