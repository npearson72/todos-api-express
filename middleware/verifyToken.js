const jwt = require('express-jwt');

module.exports = jwt({
  secret: process.env.JWT_SECRET,
  issuer: 'api.todos',
  audience: 'api.todos',
  algorithms: ['HS256']
});
