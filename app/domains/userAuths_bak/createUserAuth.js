const { UserAuthRepo } = require('@repos/objection');
const { UnauthorizedError } = require('@lib/errors');

const VALID_AUTH_PROVIDERS = ['auth0', 'google-oauth2'];

const selectAuthProvider = providerUserId => {
  return VALID_AUTH_PROVIDERS.find(provider => providerUserId.match(provider));
};

async function createUserAuth(
  userId,
  providerUserId,
  emailVerified,
  repo = UserAuthRepo
) {
  const provider = selectAuthProvider(providerUserId);

  if (!provider) throw new UnauthorizedError('Invalid auth provider');

  const params = {
    provider,
    providerUserId,
    emailVerified: emailVerified || false,
    userId
  };

  return await repo.create(params);
}

module.exports = createUserAuth;
