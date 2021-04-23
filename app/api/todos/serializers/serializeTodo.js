const { Serializer } = require('jsonapi-serializer');

const TodoSerializer = new Serializer('todos', {
  attributes: ['title', 'completed']
});

module.exports = data => TodoSerializer.serialize(data);
