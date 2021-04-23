const Joi = require('joi');

module.exports = Joi.object({
  email: Joi.string().required().email().max(255),
  password: Joi.string().required().min(7).max(255)
});
