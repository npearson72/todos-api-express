const { updateTodo } = require('@domains/todos');
const { serializeTodo } = require('../serializers');

async function updateAction(params) {
  const updatedTodo = await updateTodo(params);

  return { todo: serializeTodo(updatedTodo) };
}

module.exports = updateAction;
