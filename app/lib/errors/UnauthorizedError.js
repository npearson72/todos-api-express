const BaseError = require('./BaseError');

class UnauthorizedError extends BaseError {
  constructor(message, options = {}) {
    super(message, options);
    this.statusCode = 401;
  }
}

module.exports = UnauthorizedError;
