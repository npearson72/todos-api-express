const { ModelBase } = require('./support/ModelBase');

class User extends ModelBase {
  static get tableName() {
    return 'users';
  }

  static get relationMappings() {
    const { Todo } = require('.');

    return {
      todos: {
        relation: ModelBase.HasManyRelation,
        modelClass: Todo,
        join: {
          from: 'users.id',
          to: 'todos.user_id'
        }
      }
    };
  }
}

module.exports = User;
