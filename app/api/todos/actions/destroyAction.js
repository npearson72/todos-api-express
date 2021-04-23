const { TodoRepo } = require('@repos/objection');

async function destroyAction(id) {
  return await TodoRepo.destroy(id);
}

module.exports = destroyAction;
