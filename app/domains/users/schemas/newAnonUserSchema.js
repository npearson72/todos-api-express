const Joi = require('joi');
const { schemaValidationFacade } = require('@lib');
const { ValidationError } = require('@lib/errors');
const { UserRepo } = require('@repos/objection');

const validateUniqueEmail = async email => {
  const user = await UserRepo.fetchOne({ email });

  if (user) throw new ValidationError('Email already taken');
};

const schema = Joi.object({
  firstName: Joi.string().required().valid('Anonymous').max(255),
  lastName: Joi.string().required().valid('Anonymous').max(255),
  email: Joi.string().email().required().max(255).external(validateUniqueEmail),
  password: Joi.string().required().min(7).max(255)
});

module.exports = schemaValidationFacade(schema);
