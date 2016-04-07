'use strict'

const mailer = require('./../controllers/mailer');

const mailerRouteConfig = router => {
  router.post('/', mailer.massMailer);
}

module.exports = mailerRouteConfig;	