const cors = require('cors');
const { ForbiddenError } = require('@lib/errors');

const corsConfig = require('config').get('cors');

function customCors() {
  return cors({
    origin: (origin, callback) => {
      if (corsConfig.whitelistedOrigins.includes(origin))
        return callback(undefined, true);

      callback(new ForbiddenError(`Origin ${origin} blocked by CORS policy`));
    }
  });
}

module.exports = customCors;
