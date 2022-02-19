const { UserRepo } = require('@repos/objection');
const { findOrCreateUserSchema: schema } = require('../schemas');
const processExistingUser = require('./processExistingUser');
const createNewUser = require('./createNewUser');

async function findOrCreateUser(params) {
  const { providerUserId, email, emailVerified } = schema.validate(params);

  const existingUser = await UserRepo.fetchOneWithUserAuths({ email });

  if (existingUser) {
    await processExistingUser(existingUser, providerUserId, emailVerified);

    return existingUser;
  }

  return await createNewUser(providerUserId, email, emailVerified);
}

module.exports = findOrCreateUser;
