const express = require('express');
const {
  commonMiddleware,
  badUrlHandler,
  globalErrorHandler
} = require('./middleware');
const { protectRoute } = require('./middleware/auth');
const { todosRoutes } = require('./api');

const app = express();

app.use(commonMiddleware);

app.use('/api/v1/todos', protectRoute, todosRoutes);
app.use('*', badUrlHandler);

app.use(globalErrorHandler);

module.exports = app;
