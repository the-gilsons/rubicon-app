'use strict'
const mailer = require('./../docuSignMailer');
const async = require('async');

module.exports = {
  massMailer: function(req, res) {

    console.log(req.body);

    const emailList = req.body.emailList;
    const docuSignEmail = req.body.docuSignEmail;
    const docuSignPass = req.body.docuSignPass;
    const templateInfo = {
      id: req.body.templateInfo.id,
      roleName: req.body.templateInfo.role
    };
    console.log('this is template info: ', templateInfo);


    var emailToSend = emailList.map(function(item){
        return function(callback){
          mailer(docuSignEmail, docuSignPass, item, templateInfo, callback);
        };
    });

    async.parallel(emailToSend, function(err, logs){
      if(err){
        console.log(err);
        res.status(400);
        res.send(JSON.stringify(err));
      } else {
        var errorLog = [];
        logs.forEach(function(item){
          if (item !== undefined){
            errorLog.push(item);
          }
        });
        if(errorLog.length){
            console.log('Some emails failed to send!');
            res.status(400);
            res.send(JSON.stringify(errorLog));
        } else {
            res.send('Operation Successful');
        }
      }
    });
  
  }
};