const express = require('express');
const controller = require('./todosController');

const router = express.Router();

router.route('/').get(controller.getAll);
router.route('/').post(controller.create);
router.route('/:id').patch(controller.update);
router.route('/:id').delete(controller.destroy);

module.exports = router;
