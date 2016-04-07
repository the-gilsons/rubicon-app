'use strict'

const mailer = require('./../massMailer.js');

const mailerRouteConfig = router => {
  router.post('/emailList', mailer.massMailer);
}

module.exports = mailerRouteConfig;	