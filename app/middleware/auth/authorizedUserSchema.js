const Joi = require('joi');
const { schemaValidationFacade } = require('@lib');

const schema = Joi.object({
  providerUserId: Joi.string().required().max(255),
  email: Joi.string().email().required().max(255),
  emailVerified: Joi.boolean().default(false)
});

module.exports = schemaValidationFacade(schema);
