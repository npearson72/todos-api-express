const { success } = require('@lib/services');
const { Todo } = require('@models');
const { serializeTodo } = require('./serializers');

module.exports = async userId => {
  const todos = await Todo.query().where({ userId }).orderBy('id');

  const serializedTodos = todos.map(todo => serializeTodo(todo));

  return success({ todos: serializedTodos });
};
