'use strict'

const User = require('./../db/models/userModel');

const userRequestHandler = {
  getUsers: (req, res, next) => {
    User.getAllUserEmails()
      .then(allUserData => {
        console.log(allUserData);
        res.json(allUserData);
      })
      .catch(err => {
        next(err);
      });
  }
}

module.exports = userRequestHandler;