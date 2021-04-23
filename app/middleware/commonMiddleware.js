const express = require('express');
const helmet = require('helmet');
const customCors = require('./customCors');
const jsonApiDeserializer = require('./jsonApiDeserializer');
const jsonApiContentType = require('./jsonApiContentType');

module.exports = [
  express.json({
    type: ['application/json', 'application/vnd.api+json']
  }),
  jsonApiDeserializer,
  jsonApiContentType,
  helmet(),
  customCors()
];
