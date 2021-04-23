const bcrypt = require('bcryptjs');

module.exports = (passwordAttempt, hashedPassword) => {
  return bcrypt.compare(passwordAttempt, hashedPassword);
};
