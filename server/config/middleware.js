'use strict'
const morgan = require('morgan');
const bodyParser = require('body-parser');
const utils = require('./utils');
const joinPaths = require('path').join;

const applyMiddleware = (app, express) => {
  // middlewares
  
  // morgan for loggin our incoming requests during development
  app.use(morgan('dev'));
  
  //body parser middleware to parse the data in our incoming requests
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  
  // error handling and error logging middlewares
  app.use(utils.errorHandler);
  app.use(utils.logError);
  
  // feeding up dummy html for now
  app.use(express.static(joinPaths(__dirname, '../../client/public')));
}

module.exports = applyMiddleware;