const Joi = require('joi');

module.exports = Joi.object({
  title: Joi.string().min(1).max(255),
  completed: Joi.boolean()
}).min(1); // Requires at least one key
