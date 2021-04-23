const express = require('express');
const controller = require('../controllers/authsController');

const router = express.Router();

router.route('/register').post(controller.register);
router.route('/login').post(controller.login);

module.exports = router;
