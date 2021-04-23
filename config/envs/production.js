module.exports = {
  database: {
    connection: {
      database: 'todos_production'
    },
    pool: {
      min: 2,
      max: 10
    }
  }
};
