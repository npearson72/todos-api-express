class RecordNotFound extends Error {
  constructor(message) {
    super(message);
    this.name = 'RecordNotFound';
    this.statusCode = 404;
  }
}

module.exports = RecordNotFound;
