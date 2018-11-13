const mongoose = require('mongoose');
const config = require('config');

module.exports = function() {
  mongoose
    .connect(
      config.get('dbURI'),
      { useNewUrlParser: true, useCreateIndex: true }
    )
    .then(() => {
      console.log('connected to database.');
    })
    .catch(ex => {
      console.error(ex);
    });
};
