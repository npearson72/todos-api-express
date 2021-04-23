const { ValidationError } = require('@lib/errors');

function schemaValidationFacade(schema) {
  return {
    validate(params) {
      const { value, error } = schema.validate(params, {
        strict: true,
        stripUnknown: true
      });

      if (error) throw new ValidationError(error.message);

      return value;
    },

    async validateAsync(params) {
      try {
        return await schema.validateAsync(params);
      } catch (err) {
        // Remove the path that Joi adds to async error messages
        err.message = err.message.replace(/\W+\(.*\)/, '');

        throw err;
      }
    }
  };
}

module.exports = schemaValidationFacade;
