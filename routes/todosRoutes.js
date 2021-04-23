const express = require('express');
const controller = require('../controllers/todosController');

const router = express.Router();

router.route('/').get(controller.index);
router.route('/').post(controller.create);
router.route('/:id').patch(controller.update);
router.route('/:id').delete(controller.destroy);

module.exports = router;
