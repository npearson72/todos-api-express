const { UserAuthRepo } = require('@repos/objection');
const { createUserAuth } = require('@domains/userAuths');

const updateUserAuth = async (userAuth, emailVerified) => {
  // Don't update if email is already verified OR it's status hasn't changed
  if (userAuth.emailVerified || userAuth.emailVerified === emailVerified)
    return;

  userAuth.emailVerified = emailVerified;

  return await UserAuthRepo.update(userAuth);
};

async function processExistingUser(user, providerUserId, emailVerified) {
  const userAuth = user.userAuths.find(
    userAuth => userAuth.providerUserId === providerUserId
  );

  if (userAuth) {
    return await updateUserAuth(userAuth, emailVerified);
  } else {
    return await createUserAuth(user.id, providerUserId, emailVerified);
  }
}

module.exports = processExistingUser;
