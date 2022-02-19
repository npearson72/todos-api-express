const ErrorSerializer = require('jsonapi-serializer').Error;
const { databaseErrorHandler } = require('@lib/errors/handlers');
const { logError } = require('@lib');

function globalErrorHandler(err, _req, res, _next) {
  logError(err);

  err = databaseErrorHandler(err);

  const statusCode = err.statusCode || err.status || 500;

  const jsonApiError = new ErrorSerializer({
    status: statusCode,
    code: err.code,
    detail: err.message || 'Unexpected Error'
  });

  res.status(statusCode).json(jsonApiError);
}

module.exports = globalErrorHandler;
