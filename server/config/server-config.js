'use strict'

const express = require('express');
const createServer = require('http').createServer;
const applyMiddleware = require('./middleware');

let server = createServer();

let app = express();

// applying the middleware function that we export in ./middleware.js
applyMiddleware(app, express);

server.on('request', app);

module.exports = server;