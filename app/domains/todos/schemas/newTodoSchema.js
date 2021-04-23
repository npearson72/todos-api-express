const Joi = require('joi');
const { schemaValidationFacade } = require('@lib');

const schema = Joi.object({
  title: Joi.string().required().max(255),
  completed: Joi.boolean(),
  userId: Joi.number().required()
});

module.exports = schemaValidationFacade(schema);
