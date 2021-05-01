const jwtDecode = require('jwt-decode');
const { verifyPassword, createToken } = require('@lib/utils');
const { success, failure } = require('@lib/services');
const { ForbiddenError, ValidationError } = require('@lib/errors');
const { User } = require('@models');
const { loginSchema } = require('./schemas');
const { serializeUser } = require('./serializers');

module.exports = async rawParams => {
  try {
    const params = await validateParams(rawParams);
    const user = await findUser(params.email);

    await validatePassword(params.password, user.password);

    const token = createToken(user);
    const decodedToken = jwtDecode(token);
    const expiresAt = decodedToken.exp;

    return success({ user: serializeUser(user), token, expiresAt });
  } catch (err) {
    if (['ValidationError', 'ForbiddenError'].includes(err.name))
      return failure(err);

    throw err;
  }
};

const validateParams = async params => {
  try {
    return await loginSchema.validateAsync(params, {
      strict: true,
      stripUnknown: true
    });
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

const findUser = async email => {
  const user = await User.query().findOne({ email });

  if (user) return user;

  throw new ForbiddenError('Invalid email or password');
};

const validatePassword = async (submittedPassword, userPassword) => {
  const isValidPassword = await verifyPassword(submittedPassword, userPassword);

  if (!isValidPassword) throw new ForbiddenError('Invalid email or password');
};
