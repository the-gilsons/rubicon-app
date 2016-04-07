'use strict'

const mailer = require('./../docuSignMailer');

module.exports = {
    massMailer: (req, res, next) => {
      // validation on the server
      if (req.body.emailList && req.body.docuSignEmail && req.body.docuSignPass, req.body.volunteerInfo, req.body.templateInfo) {
        
        const emailList = req.body.emailList;
        const docuSignEmail = req.body.docuSignEmail;
        const docuSignPass = req.body.docuSignPass;
        const volunteerInfo = req.body.volunteerInfo;
        const templateInfo = req.body.templateInfo;
        
        emailList.forEach(function(volunteer) {
            mailer(docuSignEmail, docuSignPass, volunteerInfo, templateInfo);
        });
        res.send('Operation complete!');
      }
    }
};