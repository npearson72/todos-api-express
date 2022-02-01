const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

const auth0Config = require('config').get('auth0');

const verifyAccessToken = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: auth0Config.jwksUri
  }),
  audience: auth0Config.audience,
  issuer: auth0Config.issuer,
  algorithms: ['RS256']
});

module.exports = verifyAccessToken;
