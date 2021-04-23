const errorCatcher = require('./support/errorCatcher');
const { registerAction, loginAction } = require('@actions/auths');

const register = async (req, res, _next) => {
  const result = await registerAction(req.body.user);

  if (result.isSuccess) {
    res.status(201).json({ user: result.user });
  } else {
    res.status(result.statusCode).json({ error: result.error });
  }
};

const login = async (req, res, _next) => {
  const result = await loginAction(req.body.user);

  if (result.isSuccess) {
    res.status(201).json({ user: result.user });
  } else {
    res.status(result.statusCode).json({ error: result.error });
  }
};

module.exports = errorCatcher(register, login);