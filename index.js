const config = require('config');
const express = require('express');
const app = express();
const routes = require('./startups/routes');
const database = require('./startups/database');

database();
routes(app);

const port = config.get('PORT');
app.listen(port, () => {
  console.log(`server is listening @port: ${port} ...`);
});
