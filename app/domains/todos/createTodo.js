const { TodoRepo } = require('@repos/objection');
const { newTodoSchema: schema } = require('./schemas');

async function createTodo(params) {
  const validatedParams = schema.validate(params);

  return await TodoRepo.create(validatedParams);
}

module.exports = createTodo;
