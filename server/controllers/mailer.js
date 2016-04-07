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

    var emailToSend = emailList.map(function(item){
        return function(callback){
          mailer(docuSignEmail, docuSignPass, item, templateInfo, callback);
        };
    })

    async.parallel(emailToSend, function(err, logs){
      if(logs.length){
          console.log('Some emails failed to send!');
          res.status(400);
          res.send(JSON.stringify(logs));
      } else {
          res.send('Operation Successful');
      }
    });
  
  }
};