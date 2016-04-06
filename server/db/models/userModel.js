'use strict'

const db = require('../db');
const Promise = require('bluebird');

const userModel = {
  getAllUserEmails: () => {
    return new Promise((resolve, reject) => {
      let queryString = `select * from users;`;
      
      db.query(queryString)
        .map(data => {
          return data.rows;
        })
        .subscribe(allUserData => {
          resolve(allUserData);
        },
        err => {
          reject(err);
        });
    });
  }
}

module.exports = userModel;