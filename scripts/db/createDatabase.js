const dbConfig = require('config').get('database');
const { database: knexConfig } = require('@config/envs/default');
const knex = require('knex')(knexConfig);

const dbName = dbConfig.connection.database;

async function createDatabase() {
  try {
    if (!dbName) throw new Error('Database name is required. Exiting.');

    await knex.raw(`CREATE DATABASE ${dbName};`);
    console.log(`Created database ${dbName}`);
  } catch (err) {
    console.log(err.message);
  }

  process.exit();
}

createDatabase();
