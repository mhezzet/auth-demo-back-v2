const express = require('express');
const config = require('config');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const users = require('../routes/users');
const auth = require('../routes/auth');
const corsOptions = {
  exposedHeaders: ['x-auth-token', 'Authorization']
};

module.exports = function(app) {
  app.use(cors(corsOptions));
  app.use(express.json());
  app.use(express.static('public'))
  app.use('/api/users', users);
  app.use('/api/auth', auth);
  if (config.get('env') === 'production') {
    app.use(helmet());
    app.use(compression());
  }
};
