const { success, failure } = require('@lib/services');
const { RecordNotFound, ValidationError } = require('@lib/errors');
const { Todo } = require('@models');
const { updateSchema } = require('./schemas');
const { serializeTodo } = require('./serializers');

module.exports = async (id, rawParams) => {
  try {
    const params = await validateParams(rawParams);
    const updatedTodo = await updateTodo(id, params);

    return success({ todo: serializeTodo(updatedTodo) });
  } catch (err) {
    if (['ValidationError', 'RecordNotFound'].includes(err.name))
      return failure(err);

    throw err;
  }
};

const validateParams = async params => {
  try {
    return await updateSchema.validateAsync(params, {
      strict: true,
      stripUnknown: true
    });
  } catch (err) {
    throw new ValidationError(err.message);
  }
};

const updateTodo = async (id, params) => {
  const todo = await Todo.query().patchAndFetchById(id, params);

  if (todo) return todo;

  throw new RecordNotFound(`Couldn't find Todo with 'id'=${id}`);
};
