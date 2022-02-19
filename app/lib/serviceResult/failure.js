function failure(code, message) {
  return { isSuccess: false, isFailure: true, code, message };
}

module.exports = failure;
