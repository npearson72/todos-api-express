const RepoBase = require('./RepoBase');
const { Todo } = require('@models');
const { TodoEntity } = require('@repos/entities');

class TodoRepo extends RepoBase {
  // trx (transaction) is optional and typically supplied by UnitOfWork
  constructor({ model = Todo, entity = TodoEntity, trx } = {}) {
    super({ model, entity, trx });
  }
}

module.exports = TodoRepo;
