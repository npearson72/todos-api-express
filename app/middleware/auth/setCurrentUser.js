const jwtDecode = require('jwt-decode');
const { ServerError } = require('@lib/errors');
const { findOrCreateUser } = require('@domains/auths');

const auth0Config = require('config').get('auth0');

const parseToken = token => {
  const payload = jwtDecode(token);

  const namespace = auth0Config.jwtNamespace;

  return {
    providerUserId: payload['sub'],
    email: payload[`${namespace}/email`],
    emailVerified: payload[`${namespace}/emailVerified`]
  };
};

async function setCurrentUserId(req, _res, next) {
  try {
    const params = parseToken(req.headers.authorization);
    const user = await findOrCreateUser(params);

    req.currentUser = user;

    next();
  } catch (err) {
    if (err.name === 'ValidationError') {
      // TODO: Send to monitoring service
      console.error(err);

      const serviceError = new ServerError('Something went wrong');

      return next(serviceError);
    }

    next(err);
  }
}

module.exports = setCurrentUserId;
