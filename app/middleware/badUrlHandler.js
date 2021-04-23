const { NotFoundError } = require('@lib/errors');

function badUrlHandler(req) {
  throw new NotFoundError(`Requested URI "${req.originalUrl}" not found`);
}

module.exports = badUrlHandler;
