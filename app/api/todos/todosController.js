const { catchAsync } = require('../support');
const {
  getAllAction,
  createAction,
  updateAction,
  destroyAction
} = require('./actions');

const getAll = async (req, res) => {
  const result = await getAllAction(req.currentUserId);

  res.status(200).json(result.todos);
};

const create = async (req, res) => {
  const result = await createAction({
    ...req.deserializedBody,
    userId: req.currentUserId
  });

  res.status(201).json(result.todo);
};

const update = async (req, res) => {
  const result = await updateAction(req.deserializedBody);

  res.status(200).json(result.todo);
};

const destroy = async (req, res) => {
  await destroyAction(req.params.id);

  res.sendStatus(200);
};

module.exports = catchAsync(getAll, create, update, destroy);
