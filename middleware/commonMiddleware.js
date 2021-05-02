const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const cookieParse = require('cookie-parser');
const csrf = require('csurf');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

module.exports = [
  cors(),
  helmet(),
  cookieParse(),
  session({
    store: new FileStore({}),
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    rolling: true,
    cookie: {
      httpOnly: true,
      sameSite: true,
      secure: process.env.NODE_ENV === 'production' ? true : false,
      maxAge: parseInt(process.env.SESSION_MAX_AGE)
    }
  }),
  csrf({ cookie: true }),
  express.json()
];
