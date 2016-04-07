'use strict'
const mailer = require('./../docuSignMailer');
const async = require('async');
module.exports = {
    massMailer: function(req, res) {
      // validation
      if (req.body.emailList && req.body.docuSignEmail && req.body.docuSignPass && req.body.volunteerInfo && req.body.templateInfo) {
        const emailList = req.body.emailList;
        const docuSignEmail = req.body.docuSignEmail;
        const docuSignPass = req.body.docuSignPass;
        const volunteerInfo = req.body.volunteerInfo;
        const templateInfo = req.body.templateInfo;
        async.eachSeries(emailList, function(item) {
            mailer(docuSignEmail, docuSignPass, volunteerInfo, templateInfo);
        });
        res.send('Operation Complete');
      }
    }
};