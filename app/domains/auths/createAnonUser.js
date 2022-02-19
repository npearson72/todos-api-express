const { UserRepo, UserAuthRepo } = require('@repos/objection');
const selectAuthProvider = require('./selectAuthProvider');

async function createAnonUser(providerUserId, email, emailVerified) {
  const provider = selectAuthProvider(providerUserId);

  const user = await UserRepo.create({
    firstName: 'Anonymous',
    lastName: 'Anonymous',
    email
  });

  await UserAuthRepo.create({
    provider,
    providerUserId,
    emailVerified,
    userId: user.id
  });

  return user;
}

module.exports = createAnonUser;
