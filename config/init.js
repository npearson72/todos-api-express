var path = require('path');

process.env.NODE_CONFIG_DIR = path.resolve(__dirname, 'envs');

require('dotenv').config();
require('module-alias/register');
