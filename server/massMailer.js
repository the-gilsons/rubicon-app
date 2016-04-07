'use strict'

const mailer = require('./docuSignMailer.js');

module.exports = {
	massMailer: function(req, res) {
		const emailList = req.body.emailList;
		const docuSignEmail = req.body.docuSignEmail;
		const docuSignPass = req.body.docuSignPass;
		const volunteerInfo = req.body.volunteerInfo;
		const templateInfo = req.body.templateInfo;

		emailList.forEach(function(volunteer) {
			mailer(docuSignEmail, docuSignPass, volunteerInfo, templateInfo)
		});

		res.send('Operation complete!');
	}
};