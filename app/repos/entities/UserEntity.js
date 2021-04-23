class UserEntity {
  constructor(params) {
    this.id = params.id;
    this.firstName = params.firstName;
    this.lastName = params.lastName;
    this.email = params.email;
    this.createdAt = params.createdAt;
    this.updatedAt = params.updatedAt;
  }
}

module.exports = UserEntity;
