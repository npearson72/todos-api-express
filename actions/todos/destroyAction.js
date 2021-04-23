const { success, failure } = require('@lib/services');
const { RecordNotFound } = require('@lib/errors');
const { Todo } = require('@models');

module.exports = async id => {
  try {
    await deleteTodo(id);

    return success();
  } catch (err) {
    if (err.name === 'RecordNotFound') return failure(err);

    throw err;
  }
};

const deleteTodo = async id => {
  const result = await Todo.query().findById(id).delete();

  if (result > 0) return result;

  throw new RecordNotFound(`Couldn't find Todo with 'id'=${id}`);
};
