const { createAnonUser } = require('@domains/users');
const { createUserAuth } = require('@domains/userAuths');
const { UnitOfWork } = require('@repos/objection');

async function createNewUser(providerUserId, email, emailVerified) {
  const uow = await new UnitOfWork();

  try {
    const user = await createAnonUser(email, uow.UserRepo);

    await createUserAuth(
      user.id,
      providerUserId,
      emailVerified,
      uow.UserAuthRepo
    );

    uow.commit();

    return user;
  } catch (err) {
    uow.rollback();

    throw err;
  }
}

module.exports = createNewUser;
