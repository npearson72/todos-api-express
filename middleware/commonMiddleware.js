const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

module.exports = [cors(), helmet(), express.json()];
