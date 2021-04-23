const bcrypt = require('bcryptjs');

module.exports = password => {
  const saltStrengthLevel = 12;

  return new Promise((resolve, reject) => {
    bcrypt.genSalt(saltStrengthLevel, (err, salt) => {
      if (err) reject(err);

      bcrypt.hash(password, salt, (err, hash) => {
        if (err) reject(err);

        resolve(hash);
      });
    });
  });
};
