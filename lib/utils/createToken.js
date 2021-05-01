const jwt = require('jsonwebtoken');

module.exports = user => {
  const payload = {
    sub: user.id,
    email: user.email,
    iss: 'api.todos',
    aud: 'api.todos'
  };

  const options = {
    algorithm: 'HS256',
    expiresIn: '1h'
  };

  return jwt.sign(payload, process.env.JWT_SECRET, options);
};
