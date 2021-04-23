const connection = require('./dbConnection');
const knex = require('knex')({ client: 'pg', connection });

const dbName = process.env.DATABASE_NAME;

(async () => {
  if (!dbName) throw new Error('Database name is required. Exiting.');

  try {
    await knex.raw(`DROP DATABASE ${dbName};`);
    console.log(`Dropped database ${dbName}`);
  } catch (err) {
    console.log(err.message);
  }

  process.exit();
})();
