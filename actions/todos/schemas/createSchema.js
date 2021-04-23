const Joi = require('joi');

module.exports = Joi.object({
  title: Joi.string().required().max(255),
  completed: Joi.boolean(),
  userId: Joi.number().required()
});
