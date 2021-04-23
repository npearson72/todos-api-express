const { success, failure } = require('@lib/services');
const { ValidationError } = require('@lib/errors');
const { Todo } = require('@models');
const { createSchema } = require('./schemas');
const { serializeTodo } = require('./serializers');

module.exports = async rawParams => {
  try {
    const params = await validateParams(rawParams);
    const newTodo = await createTodo(params);

    return success({ todo: serializeTodo(newTodo) });
  } catch (err) {
    if (err.name === 'ValidationError') return failure(err);

    throw err;
  }
};

const validateParams = async params => {
  try {
    return await createSchema.validateAsync(params, {
      strict: true,
      stripUnknown: true
    });
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

const createTodo = async params => {
  return await Todo.query().insertAndFetch(params);
};
