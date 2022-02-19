const { logError } = require('@lib');
const { success, failure } = require('@lib/serviceResult');
const { UserRepo } = require('@repos/objection');
const createAnonUser = require('./createAnonUser');
const updateExistingUser = require('./updateExistingUser');

async function fetchAuthorizedUser({ providerUserId, email, emailVerified }) {
  try {
    let user = await UserRepo.fetchOneWithUserAuths({ email });

    if (user) {
      await updateExistingUser(user, providerUserId, emailVerified);

      return success(user.id);
    }

    user = await createAnonUser(providerUserId, email, emailVerified);

    return success(user.id);
  } catch (err) {
    logError(err);

    return failure('UnexpectedError', 'Failed to fetch authorized user.');
  }
}

module.exports = fetchAuthorizedUser;
