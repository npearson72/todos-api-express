const { Model } = require('objection');
const dbConfig = require('config').get('database');

const knex = require('knex')(dbConfig);

function init() {
  Model.knex(knex);
}

module.exports = { init, knex };
