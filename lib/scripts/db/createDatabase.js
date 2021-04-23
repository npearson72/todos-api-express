const connection = require('./dbConnection');
const knex = require('knex')({ client: 'pg', connection });

const dbName = process.env.DATABASE_NAME;

(async () => {
  try {
    if (!dbName) throw new Error('Database name is required. Exiting.');

    await knex.raw(`CREATE DATABASE ${dbName};`);
    console.log(`Created database ${dbName}`);
  } catch (err) {
    console.log(err.message);
  }

  process.exit();
})();
