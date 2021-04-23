module.exports = (err, _req, res, _next) => {
  if (err.stack) console.log(err.stack);

  res.status(err.statusCode || 500).json({
    error: {
      name: err.name,
      message: err.message
    }
  });
};
