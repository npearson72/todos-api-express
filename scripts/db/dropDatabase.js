const dbConfig = require('config').get('database');
const { database: knexConfig } = require('@config/envs/default');
const knex = require('knex')(knexConfig);

const dbName = dbConfig.connection.database;

async function dropDatabase() {
  if (!dbName) throw new Error('Database name is required. Exiting.');

  try {
    await knex.raw(`DROP DATABASE ${dbName};`);
    console.log(`Dropped database ${dbName}`);
  } catch (err) {
    console.log(err.message);
  }

  process.exit();
}

dropDatabase();
