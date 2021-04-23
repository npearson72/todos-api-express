function jsonApiContentType(_req, res, next) {
  if (res.req.headers.accept === 'application/vnd.api+json') {
    res.setHeader('Content-Type', 'application/vnd.api+json');
  }

  next();
}

module.exports = jsonApiContentType;
