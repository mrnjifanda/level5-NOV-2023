const { Router } = require('express');
const router = Router();

const taskController = require('../controllers/task.controller');

router.post('/create', taskController.create);
router.get('/find/:id', taskController.findOne);
router.get('/find', taskController.find);
router.delete('/delete/:id', taskController.remove);

module.exports = router;