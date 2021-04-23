const crypto = require('crypto');
const { UserRepo } = require('@repos/objection');
const { hashPassword } = require('@lib');
const { newAnonUserSchema: schema } = require('./schemas');

const generateAnonPassword = () => {
  return crypto.randomBytes(16).toString('hex');
};

async function createAnonUser(email, repo = UserRepo) {
  const hashedPassword = await hashPassword(generateAnonPassword());

  const params = {
    firstName: 'Anonymous',
    lastName: 'Anonymous',
    email,
    password: hashedPassword
  };

  const validatedParams = await schema.validateAsync(params);

  return await repo.create(validatedParams);
}

module.exports = createAnonUser;
