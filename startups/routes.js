const express = require('express');
const config = require('config');
const helmet = require('helmet');
const compression = require('compression');
const users = require('../routes/users');
const auth = require('../routes/auth');

module.exports = function(app) {
  app.use(express.json());
  app.use('/api/users', users);
  app.use('/api/auth', auth);
  if (config.get('env') === 'production') {
    app.use(helmet());
    app.use(compression());
  }
};
