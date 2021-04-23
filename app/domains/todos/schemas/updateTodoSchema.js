const Joi = require('joi');
const { schemaValidationFacade } = require('@lib');

const schema = Joi.object({
  id: Joi.number().required(),
  title: Joi.string().min(1).max(255),
  completed: Joi.boolean()
}).min(1);

module.exports = schemaValidationFacade(schema);
