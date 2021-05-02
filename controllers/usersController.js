const errorCatcher = require('./support/errorCatcher');
const { serializeUser } = require('@actions/auths/serializers');

const info = async (req, res, _next) => {
  setTimeout(() => {
    res.status(200).json({
      user: serializeUser(req.currentUser)
    });
  }, 1000);
};

module.exports = errorCatcher(info);
