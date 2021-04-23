const { ModelBase } = require('./support');

class Todo extends ModelBase {
  static get tableName() {
    return 'todos';
  }
}

module.exports = Todo;
