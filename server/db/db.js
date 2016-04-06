'use strict'
// dot env package gives us the database url
require('dotenv').config();

const pg = require('pg-rxjs');
const connectionString = `${process.env.DATABASE_URL}?ssl=true`;

const client = new pg.Pool(connectionString);

module.exports = client;
