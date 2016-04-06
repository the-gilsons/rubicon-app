'use strict'

const User = require('./../controllers/userController');

const userRouteConfig = router => {
  router.get('/', User.getUsers);
}

module.exports = userRouteConfig;