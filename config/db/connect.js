const knex = require('knex');
const knexFile = require('./knexfile');
const { Model } = require('objection');

module.exports = () => {
  return new Promise((resolve, _reject) => {
    const DB = knex(knexFile.development);

    Model.knex(DB);

    resolve(true);
  });
};
