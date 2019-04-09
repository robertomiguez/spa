module.exports = app => {
  const userController = require('../controller/userController'),
    schemaValidator = require('../schemas/schemaValidator')

  app.route('/user')
    .get(userController.getUser)
    .post(schemaValidator.validCreateUser, schemaValidator.validCreateUser, userController.createUser)

  app.route('/login')
    .post(schemaValidator.validLoginUser, schemaValidator.validLoginUser, userController.loginUser)

  app.route('/logout')
    .get(userController.logoutUser)
}
