const BaseError = require('./BaseError');

class ForbiddenError extends BaseError {
  constructor(message, options = {}) {
    super(message, options);
    this.statusCode = 403;
  }
}

module.exports = ForbiddenError;
