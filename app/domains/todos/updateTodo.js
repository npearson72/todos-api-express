const { TodoRepo } = require('@repos/objection');
const { updateTodoSchema: schema } = require('./schemas');

async function updateTodo(params) {
  const validatedParams = schema.validate(params);

  const todo = await TodoRepo.fetchOneById(params.id);

  return await TodoRepo.update({ ...todo, ...validatedParams });
}

module.exports = updateTodo;
