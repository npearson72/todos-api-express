const database = require('@db');
const app = require('@app');
const { logError } = require('@lib');

const port = require('config').get('port');

database.init();

app.disable('x-powered-by');

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

process.on('unhandledRejection', err => {
  logError('UNHANDLED REJECTION! Shutting down...\n', err);

  process.exit(1);
});
