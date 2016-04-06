'use strict'

const express = require('express');
const createServer = require('http').createServer;

let server = createServer();

let app = express();

module.exports = server;