const { createTodo } = require('@domains/todos');
const { serializeTodo } = require('../serializers');

async function createAction(params) {
  const newTodo = await createTodo(params);

  return { todo: serializeTodo(newTodo) };
}

module.exports = createAction;
