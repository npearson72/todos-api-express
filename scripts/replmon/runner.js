const database = require('@db');

database.init();

// Make sure to run with nodemon

function runner(callback = () => {}) {
  try {
    callback();
  } catch (err) {
    if (err.message) return console.log(err.message);

    console.log(err);
  }
}

module.exports = runner;
