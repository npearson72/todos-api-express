const { ModelBase } = require('./support/ModelBase');

class Todo extends ModelBase {
  static get tableName() {
    return 'todos';
  }
}

module.exports = Todo;
