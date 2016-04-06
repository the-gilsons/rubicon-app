'use strict'
const morgan = require('morgan');
const bodyParser = require('body-parser');

module.exports = (app, express) => {
  // middlewares
  
  // morgan for loggin our incoming requests during development
  app.use(morgan('dev'));
  
  //body parser middleware to parse the data in our incoming requests
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  
  
}