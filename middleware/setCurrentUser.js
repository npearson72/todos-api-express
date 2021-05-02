const { UnauthorizedError } = require('@lib/errors');
const { User } = require('@models');

module.exports = async (req, _res, next) => {
  try {
    const userId = req.session.userId;

    if (!userId) throw new UnauthorizedError('Invalid or missing session data');

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

  throw new UnauthorizedError('Invalid or missing session data');
};
