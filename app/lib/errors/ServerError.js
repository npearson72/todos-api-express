const BaseError = require('./BaseError');

class ServerError extends BaseError {
  constructor(message, options = {}) {
    super(message, options);
    this.statusCode = 500;
  }
}

module.exports = ServerError;
