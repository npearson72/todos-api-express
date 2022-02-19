const auth0Config = require('config').get('auth0');
const jwtDecode = require('jwt-decode');

function parseToken(token) {
  const payload = jwtDecode(token);

  const namespace = auth0Config.jwtNamespace;

  return {
    providerUserId: payload['sub'],
    email: payload[`${namespace}/email`],
    emailVerified: payload[`${namespace}/emailVerified`]
  };
}

module.exports = parseToken;
