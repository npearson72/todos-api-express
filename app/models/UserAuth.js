const { ModelBase } = require('./support');
const User = require('./User');

class UserAuth extends ModelBase {
  static get tableName() {
    return 'user_auths';
  }

  static get relationMappings() {
    return {
      user: {
        relation: ModelBase.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'user_auths.userId',
          to: 'users.id'
        }
      }
    };
  }
}

module.exports = UserAuth;
