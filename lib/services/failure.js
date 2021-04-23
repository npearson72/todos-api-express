module.exports = ({ name, message, statusCode, ...rest } = {}) => {
  return {
    isSuccess: false,
    isFailure: true,
    error: { name, message },
    statusCode,
    ...rest
  };
};
