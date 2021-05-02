const express = require('express');
const controller = require('../controllers/usersController');

const router = express.Router();

router.route('/info').get(controller.info);

module.exports = router;
