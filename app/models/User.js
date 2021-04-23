const { ModelBase } = require('./support');
const Todo = require('./Todo');
const UserAuth = require('./UserAuth');

class User extends ModelBase {
  static get tableName() {
    return 'users';
  }

  static get relationMappings() {
    return {
      todos: {
        relation: ModelBase.HasManyRelation,
        modelClass: Todo,
        join: {
          from: 'users.id',
          to: 'todos.userId'
        }
      },
      userAuths: {
        relation: ModelBase.HasManyRelation,
        modelClass: UserAuth,
        join: {
          from: 'users.id',
          to: 'user_auths.userId'
        }
      }
    };
  }
}

module.exports = User;
