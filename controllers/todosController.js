const errorCatcher = require('./support/errorCatcher');
const {
  indexAction,
  createAction,
  updateAction,
  destroyAction
} = require('@actions/todos');

const mockCurrentUser = { id: 1 };

const index = async (_req, res, _next) => {
  const result = await indexAction(mockCurrentUser.id);

  res.status(200).json({ todos: result.todos });
};

const create = async (req, res, _next) => {
  const result = await createAction({
    ...req.body.todo,
    userId: mockCurrentUser.id
  });

  if (result.isSuccess) {
    res.status(201).json({ todo: result.todo });
  } else {
    res.status(result.statusCode).json({ error: result.error });
  }
};

const update = async (req, res, _next) => {
  const result = await updateAction(req.params.id, req.body.todo);

  if (result.isSuccess) {
    res.status(200).json({ todo: result.todo });
  } else {
    res.status(result.statusCode).json({ error: result.error });
  }
};

const destroy = async (req, res, _next) => {
  const result = await destroyAction(req.params.id);

  if (result.isSuccess) {
    res.sendStatus(200);
  } else {
    res.status(result.statusCode).json({ error: result.error });
  }
};

module.exports = errorCatcher(index, create, update, destroy);
