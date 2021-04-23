const { Deserializer } = require('jsonapi-serializer');

const deserializer = new Deserializer({
  keyForAttribute: 'camelCase'
});

function jsonApiDeserializer(req, _res, next) {
  if (
    req.headers['content-type'] === 'application/vnd.api+json' &&
    Object.keys(req.body).length
  ) {
    deserializer.deserialize(req.body, (_err, deserializedBody) => {
      req.deserializedBody = deserializedBody;
    });
  }

  next();
}

module.exports = jsonApiDeserializer;
