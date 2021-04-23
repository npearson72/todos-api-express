const RepoBase = require('./RepoBase');
const { User } = require('@models');
const { UserEntity, UserAuthEntity } = require('@repos/entities');

class UserRepo extends RepoBase {
  // trx (transaction) is optional and typically supplied by UnitOfWork
  constructor({ model = User, entity = UserEntity, trx } = {}) {
    super({ model, entity, trx });
  }

  static fetchOneWithUserAuths({ email }) {
    return new this().fetchOneWithUserAuths({ email });
  }

  async fetchOneWithUserAuths({ email }) {
    const user = await this._query
      .findOne({ email })
      .withGraphFetched('userAuths');

    if (!user) return undefined;

    const userEntity = new UserEntity(user);

    if (user.userAuths.length) {
      userEntity.userAuths = user.userAuths.map(userAuth => {
        return new UserAuthEntity(userAuth);
      });
    }

    return userEntity;
  }
}

module.exports = UserRepo;
