module.exports = (firstAction, ...remainingActions) => {
  const actions = [firstAction, ...remainingActions];

  return actions.reduce((obj, action) => {
    obj[action.name] = (req, res, next) => action(req, res, next).catch(next);

    return obj;
  }, {});
};
