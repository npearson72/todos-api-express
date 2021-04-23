class TodoEntity {
  constructor(params) {
    this.id = params.id;
    this.title = params.title;
    this.completed = params.completed;
    this.userId = params.userId;
    this.createdAt = params.createdAt;
    this.updatedAt = params.updatedAt;
  }
}

module.exports = TodoEntity;
