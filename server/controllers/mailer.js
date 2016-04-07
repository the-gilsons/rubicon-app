'use strict'
const mailer = require('./docuSignMailer.js');
const async = require('async');
module.exports = {
    massMailer: function(req, res) {
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
};