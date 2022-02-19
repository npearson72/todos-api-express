const { fetchAuthorizedUser } = require('@domains/auths');
const { logError } = require('@lib');
const { ServerError, UnauthorizedError } = require('@lib/errors');
const authorizedUserSchema = require('./authorizedUserSchema');
const parseToken = require('./parseToken');

async function setCurrentUserId(req, _res, next) {
  try {
    const params = parseToken(req.headers.authorization);

    const validParams = authorizedUserSchema.validate(params);

    const result = await fetchAuthorizedUser(validParams);

    if (result.isFailure) {
      logError(result.message);

      throw new UnauthorizedError();
    }

    req.currentUserId = result.data;

    next();
  } catch (err) {
    if (err.code === 'ValidationError') {
      logError(err);

      return next(new ServerError());
    }

    next(err);
  }
}

module.exports = setCurrentUserId;
