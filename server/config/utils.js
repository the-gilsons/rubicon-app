'use strict'

const utils = {
  // typical express error handler function
  errorHandler: (err, req, res, next) => {
    res.status(500).send({
      error: err.message
    });
  },
  
  logError: (err, req, res, next) => {
    console.error(err.stack);
    next(err);
  }
}

module.exports = utils;