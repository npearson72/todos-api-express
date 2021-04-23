const repl = require('repl');
const database = require('@db');

database.init();

const r = repl.start({
  replMode: repl.REPL_MODE_STRICT
});

r.context.example = 'example';
