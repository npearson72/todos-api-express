const express = require('express');
const { commonMiddleware } = require('./middleware');
const { authsRoutes, todosRoutes } = require('./routes');
const errorsController = require('./controllers/errorsController');

const app = express();

commonMiddleware.forEach(middleware => app.use(middleware));

app.use('/api/v1/auths', authsRoutes);
app.use('/api/v1/todos', todosRoutes);

app.use(errorsController);

module.exports = app;
