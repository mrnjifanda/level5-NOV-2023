const { Router } = require('express');
const router = Router();
const appController = require('../src/controllers/app.controller')

router.get('/', appController.home);
router.get('/contact-us', appController.contactUs)

module.exports = router;