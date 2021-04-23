exports.up = knex => {
  return knex.schema.createTable('todos', table => {
    table.increments();
    table.string('title').notNullable();
    table.boolean('completed').notNullable().default(false);
    table
      .integer('user_id')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE');
    table.timestamps(true, true);
  });
};

exports.down = knex => {
  return knex.schema.dropTableIfExists('todos');
};
