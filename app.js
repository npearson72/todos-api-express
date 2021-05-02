const express = require('express');
const { commonMiddleware, jwtCheck, setCurrentUser } = require('./middleware');
const { todosRoutes } = require('./routes');
const errorsController = require('./controllers/errorsController');

const app = express();

commonMiddleware.forEach(middleware => app.use(middleware));

app.use(jwtCheck, setCurrentUser);

app.use('/api/v1/todos', todosRoutes);

app.use(errorsController);

module.exports = app;
