const jwtDecode = require('jwt-decode');
const { UnauthorizedError } = require('@lib/errors');
const { User } = require('@models');

module.exports = async (req, _res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) throw new UnauthorizedError('Authorization token missing');

    const userId = jwtDecode(token).sub;
    const user = await findUser(userId);

    req.currentUser = user;

    next();
  } catch (err) {
    next(err);
  }
};

const findUser = async userId => {
  const user = await User.query().findById(userId);

  if (user) return user;

  throw new UnauthorizedError('Authorization token invalid');
};
