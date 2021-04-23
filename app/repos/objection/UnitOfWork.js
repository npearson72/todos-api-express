const { knex } = require('@db');
const allRepos = require('./repositories');

class UnitOfWork {
  constructor({ trxProvider = knex, repos = allRepos } = {}) {
    return (async () => {
      this._trx = await trxProvider.transaction();

      for (const key in repos) this._addRepo(repos[key]);

      return this;
    })();
  }

  commit() {
    this._trx.commit();
  }

  rollback() {
    this._trx.rollback();
  }

  _addRepo(repo) {
    this[repo.name] = new repo({ trx: this._trx });
  }
}

module.exports = UnitOfWork;
