'use strict'

const mailer = require('./../controllers/mailer');

const mailerRouteConfig = router => {
  router.post('/emailList', mailer.massMailer);
}

module.exports = mailerRouteConfig;	