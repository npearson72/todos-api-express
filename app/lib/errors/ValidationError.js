const BaseError = require('./BaseError');

class ValidationError extends BaseError {
  constructor(message, options = {}) {
    super(message, options);
    this.statusCode = 422;
  }
}

module.exports = ValidationError;
