const { Router } = require('express');
const authMiddleware = require('../src/middlewares/auth.middleware');
const router = Router();

const productController = require('../src/controllers/product.controller');

router.get('/', authMiddleware, productController.all);

module.exports = router;