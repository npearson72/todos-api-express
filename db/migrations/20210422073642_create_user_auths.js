exports.up = knex => {
  return knex.schema.createTable('user_auths', table => {
    table.increments();
    table.string('provider').notNullable();
    table.string('provider_user_id').notNullable();
    table.boolean('email_verified').notNullable().default(false);
    table
      .integer('user_id')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE');
    table.timestamps(true, true);

    table.unique(['provider', 'provider_user_id']);
  });
};

exports.down = knex => {
  return knex.schema.dropTableIfExists('user_auths');
};
