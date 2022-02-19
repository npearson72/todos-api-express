const { UnauthorizedError } = require('@lib/errors');

const VALID_AUTH_PROVIDERS = ['auth0', 'google-oauth2'];

function selectAuthProvider(providerUserId) {
  const provider = VALID_AUTH_PROVIDERS.find(provider =>
    providerUserId.match(provider)
  );

  if (!provider) throw new UnauthorizedError('Invalid auth provider.');

  return provider;
}

module.exports = selectAuthProvider;
