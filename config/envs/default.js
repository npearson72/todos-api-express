const { knexSnakeCaseMappers } = require('objection');

module.exports = {
  auth0: {
    jwtNamespace: process.env.AUTH0_JWT_NAMESPACE,
    jwksUri: process.env.AUTH0_JWKS_URI,
    audience: process.env.AUTH0_AUDIENCE,
    issuer: process.env.AUTH0_ISSUER
  },
  cors: {
    whitelistedOrigins: [process.env.API_URL, process.env.WEB_APP_URL]
  },
  database: {
    client: 'postgresql',
    connection: {
      host: 'localhost',
      charset: 'utf8'
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    ...knexSnakeCaseMappers()
  },
  port: process.env.PORT || 3000
};
