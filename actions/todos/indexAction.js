const { success } = require('@lib/services');
const { Todo } = require('@models');
const { serializeTodo } = require('./serializers');

module.exports = async userId => {
  console.log(userId);

  const todos = await Todo.query().orderBy('id');

  const serializedTodos = todos.map(todo => serializeTodo(todo));

  return success({ todos: serializedTodos });
};
