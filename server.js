require('dotenv').config();
require('module-alias/register');

const connectDB = require('./config/db/connect');
const app = require('./app');

connectDB().then(() => {
  console.log('DB connection successful!');
});

app.disable('x-powered-by');

const server = app.listen(3000, () =>
  console.log('Server running on http://localhost:3000')
);

process.on('unhandledRejection', err => {
  console.log(err.name, err.message);
  console.log('UNHANDLED REJECTION! Shutting down...');

  server.close(() => process.exit(1));
});
