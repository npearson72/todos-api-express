const { ServerError } = require('@lib/errors');

const DATABASE_ERRORS = [
  'UniqueViolationError',
  'NotNullViolationError',
  'ForeignKeyViolationError',
  'CheckViolationError',
  'DataError',
  'DBError'
];

function databaseErrorHandler(err) {
  if (DATABASE_ERRORS.includes(err.name)) {
    return new ServerError('Unexpected database error');
  }

  return err;
}

module.exports = databaseErrorHandler;
