const database = require('@db');
const app = require('@app');

const port = require('config').get('port');

database.init();

app.disable('x-powered-by');

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

process.on('unhandledRejection', err => {
  console.log(err.name, err.message);
  console.log('UNHANDLED REJECTION! Shutting down...');

  process.exit(1);
});
