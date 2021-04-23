class BaseError extends Error {
  constructor(message, options = {}) {
    super(message);
    this.name = options.name || this.constructor.name;
    this.code = options.code || this.constructor.name;
    this.statusCode = 500;
  }
}

module.exports = BaseError;
