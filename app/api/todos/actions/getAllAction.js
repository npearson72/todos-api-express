const { TodoRepo } = require('@repos/objection');
const { serializeTodo } = require('../serializers');

async function getAllActions(userId) {
  const todos = await TodoRepo.fetchAll({ userId });

  const sortedTodos = todos.sort((a, b) => +a.id - +b.id);

  return { todos: serializeTodo(sortedTodos) };
}

module.exports = getAllActions;
