const jwtDecode = require('jwt-decode');
const { hashPassword, createToken } = require('@lib/utils');
const { success, failure } = require('@lib/services');
const { ValidationError } = require('@lib/errors');
const { User } = require('@models');
const { registerSchema } = require('./schemas');
const { serializeUser } = require('./serializers');

module.exports = async rawParams => {
  try {
    const params = await validateParams(rawParams);
    const newUser = await createUser(params);

    const token = createToken(newUser);
    const decodedToken = jwtDecode(token);
    const expiresAt = decodedToken.exp;

    return success({ user: serializeUser(newUser), token, expiresAt });
  } catch (err) {
    if (err.name === 'ValidationError') return failure(err);

    throw err;
  }
};

const validateParams = async params => {
  try {
    return await registerSchema.validateAsync(params, {
      strict: true,
      stripUnknown: true
    });
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

const createUser = async params => {
  const hashedPassword = await hashPassword(params.password);

  try {
    return await User.query().insertAndFetch({
      ...params,
      password: hashedPassword
    });
  } catch (err) {
    if (err.name === 'UniqueViolationError')
      throw new ValidationError('Email already taken');
  }
};
