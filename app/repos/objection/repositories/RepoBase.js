class RepoBase {
  constructor({ model, entity, trx }) {
    this._model = model;
    this._entity = entity;

    this._query = model.query(trx);
  }

  // Static methods are non-transactional. Use only in cases where
  // database transactions are not necessary.
  static fetchOneById(id) {
    return new this().fetchOneById(id);
  }

  static fetchOne(params) {
    return new this().fetchOne(params);
  }

  static fetchAll(params) {
    return new this().fetchAll(params);
  }

  static create(params) {
    return new this().create(params);
  }

  static update(params) {
    return new this().update(params);
  }

  static destroy(params) {
    return new this().destroy(params);
  }

  async fetchOneById(id) {
    const result = await this._query
      .throwIfNotFound({
        message: `Couldn't find ${this._model.name} with 'id'=${id}`
      })
      .findById(id);

    return new this._entity(result);
  }

  async fetchOne(params) {
    const result = await this._query.findOne(params);

    if (result) return new this._entity(result);
  }

  async fetchAll(params) {
    const collection = await this._query.where(params);

    return collection.map(item => new this._entity(item));
  }

  async create(params) {
    const result = await this._query.insertAndFetch(params);

    return new this._entity(result);
  }

  async update(entity) {
    const result = await this._query
      .throwIfNotFound({
        message: `Couldn't find ${this._model.name} with 'id'=${entity.id}`
      })
      .patchAndFetchById(entity.id, entity);

    return new this._entity(result);
  }

  async destroy(id) {
    return await this._query
      .throwIfNotFound({
        message: `Couldn't find ${this._model.name} with 'id'=${id}`
      })
      .deleteById(id);
  }
}

module.exports = RepoBase;
