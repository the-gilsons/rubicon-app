'use strict'
const mailer = require('./../docuSignMailer');
const async = require('async');

module.exports = {
  massMailer: function(req, res) {

    const emailList = req.body.emailList;
    const docuSignEmail = req.body.docuSignEmail;
    const docuSignPass = req.body.docuSignPass;
    const templateInfo = req.body.templateInfo;

    let count = 0;

    async.eachSeries(emailList, (item, cb) => {
      let last = false;
      count++;
      if(count === emailList.length){
          last = true;
      }
      mailer(docuSignEmail, docuSignPass, item, templateInfo, last, cb);
    }, function(err){
      if(err.length){
          console.error(err);
          res.status(400);
          res.send(JSON.stringify(err));
      } else {
          res.send('Operation Successful');
      }
    });
  
  }
};