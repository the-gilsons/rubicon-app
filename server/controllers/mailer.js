'use strict'
const mailer = require('./../docuSignMailer');
const async = require('async');
module.exports = {
    massMailer: function(req, res) {

        const emailList = req.body.emailList;
        const docuSignEmail = req.body.docuSignEmail;
        const docuSignPass = req.body.docuSignPass;
        const templateInfo = req.body.templateInfo;

        var count = 0;

        async.eachSeries(emailList, (item, cb) => {
            var last = false;
            count++;
            if(count === emailList.length){
                last = true;
            }
            mailer(docuSignEmail, docuSignPass, item, templateInfo, last, cb);
        }, function(err){
            if(err.length > 0){
                console.log(err);
                res.send(JSON.stringify(err));
            } else {
                res.send('Operation Successful');
            }
        });
      
    }
};