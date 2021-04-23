const BaseError = require('./BaseError');

class NotFoundError extends BaseError {
  constructor(message, options = {}) {
    super(message, options);
    this.statusCode = 404;
  }
}

module.exports = NotFoundError;
