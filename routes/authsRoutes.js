const express = require('express');
const controller = require('../controllers/authsController');

const router = express.Router();

router.route('/register').post(controller.register);
router.route('/login').post(controller.login);
router.route('/logout').post(controller.logout);
router.route('/csrf').get(controller.csrf);

module.exports = router;
