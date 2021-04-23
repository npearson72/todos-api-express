const bcrypt = require('bcryptjs');

const SALT_LEVEL_STRENGTH = 12;

async function hashPassword(password) {
  const salt = await bcrypt.genSalt(SALT_LEVEL_STRENGTH);

  return await bcrypt.hash(password, salt);
}

module.exports = hashPassword;
