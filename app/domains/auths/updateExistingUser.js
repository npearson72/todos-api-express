const { UserAuthRepo } = require('@repos/objection');
const selectAuthProvider = require('./selectAuthProvider');

const updateUserAuth = async (userAuth, emailVerified) => {
  // Don't update if email is already verified OR it's status hasn't changed
  if (userAuth.emailVerified || userAuth.emailVerified === emailVerified)
    return;

  userAuth.emailVerified = emailVerified;

  await UserAuthRepo.update(userAuth);
};

async function updateExistingUser(user, providerUserId, emailVerified) {
  const userAuth = user.userAuths.find(
    userAuth => userAuth.providerUserId === providerUserId
  );

  if (userAuth) {
    await updateUserAuth(userAuth, emailVerified);
  } else {
    const provider = selectAuthProvider(providerUserId);

    const params = {
      provider,
      providerUserId,
      emailVerified,
      userId: user.id
    };

    await UserAuthRepo.create(params);
  }
}

module.exports = updateExistingUser;
