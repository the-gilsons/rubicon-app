'use strict'
require('dotenv').config();

const server = require('./config/server-config.js');

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`listening on port ${port}`)
});
