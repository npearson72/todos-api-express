const errorCatcher = require('./support/errorCatcher');
const { registerAction, loginAction } = require('@actions/auths');

const register = async (req, res, _next) => {
  const result = await registerAction(req.body.user);

  if (result.isSuccess) {
    req.session.userId = result.user.id;

    res.status(200).json({ user: result.user });
  } else {
    res.status(result.statusCode).json({ error: result.error });
  }
};

const login = async (req, res, _next) => {
  const result = await loginAction(req.body.user);

  if (result.isSuccess) {
    req.session.userId = result.user.id;

    res.status(200).json({ user: result.user });
  } else {
    res.status(result.statusCode).json({ error: result.error });
  }
};

const logout = async (req, res, _next) => {
  req.session.destroy(err => {
    if (err) throw err;

    res.sendStatus(200);
  });
};

const csrf = async (req, res, _next) => {
  res.status(200).json({ csrfToken: req.csrfToken() });
};

module.exports = errorCatcher(register, login, logout, csrf);
