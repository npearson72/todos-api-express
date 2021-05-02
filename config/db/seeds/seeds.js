exports.seed = async knex => {
  await knex('users').insert([
    {
      first_name: 'Nathan',
      last_name: 'Pearson',
      email: 'npearson72@gmail.com'
    }
  ]);

  return knex;
};
