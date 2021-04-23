const Joi = require('joi');

module.exports = Joi.object({
  firstName: Joi.string().required().max(50),
  lastName: Joi.string().required().max(50),
  email: Joi.string().required().email().max(255),
  password: Joi.string().required().min(7).max(255)
});
