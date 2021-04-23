class UserAuthEntity {
  constructor(params) {
    this.id = params.id;
    this.provider = params.provider;
    this.providerUserId = params.providerUserId;
    this.emailVerified = params.emailVerified;
    this.userId = params.userId;
    this.createdAt = params.createdAt;
    this.updatedAt = params.updatedAt;
  }
}

module.exports = UserAuthEntity;
