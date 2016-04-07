'use strict'
const mailer = require('./../docuSignMailer');
const async = require('async');
module.exports = {
    massMailer: function(req, res) {
      // validation
      if (req.body.emailList && req.body.docuSignEmail && req.body.docuSignPass && req.body.templateInfo) {
        const emailList = req.body.emailList;
        const docuSignEmail = req.body.docuSignEmail;
        const docuSignPass = req.body.docuSignPass;
        const templateInfo = req.body.templateInfo;

        async.eachSeries(emailList, (item) => {
            mailer(docuSignEmail, docuSignPass, item, templateInfo);
        });
        res.send('Operation Complete');
      }
    }
};