'use strict'
const morgan = require('morgan');
const bodyParser = require('body-parser');
const compression = require('compression');
const utils = require('./utils');
const joinPaths = require('path').join;
const userRouterConfig = require('./../routes/userRoutes');
const mailerRouterConfig = require('./../routes/mailRoutes');

const applyMiddleware = (app, express) => {
  let userRouter = express.Router();
  let mailerRouter = express.Router();
  // middlewares
  
  // morgan for loggin our incoming requests during development
  app.use(morgan('dev'));
  
  // compression middleware for gzip compression 
  app.use(compression());
  
  //body parser middleware to parse the data in our incoming requests
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  
  // error handling and error logging middlewares
  app.use(utils.errorHandler);
  app.use(utils.logError);
  
  app.use('/api/users', userRouter);
  app.use('/api/emailList', mailerRouter);
  
  userRouterConfig(userRouter);
  mailerRouterConfig(mailerRouter);

  // feeding up dummy html for now
  app.use(express.static(joinPaths(__dirname, '../../client/public')));
}

module.exports = applyMiddleware;