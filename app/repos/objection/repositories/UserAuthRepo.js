const RepoBase = require('./RepoBase');
const { UserAuth } = require('@models');
const { UserAuthEntity } = require('@repos/entities');

class UserAuthRepo extends RepoBase {
  // trx (transaction) is optional and typically supplied by UnitOfWork
  constructor({ model = UserAuth, entity = UserAuthEntity, trx } = {}) {
    super({ model, entity, trx });
  }
}

module.exports = UserAuthRepo;
