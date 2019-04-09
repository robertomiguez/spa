module.exports = app => {
  const userController = require('../controller/userController')
  const schemaValidator = require('../schemas/schemaValidator')

  app.route('/user')
    .get(userController.getUser)
    .post(schemaValidator.validCreateUser, userController.createUser)

  app.route('/login')
    .post(schemaValidator.validLoginUser, userController.loginUser)

  app.route('/logout')
    .get(userController.logoutUser)
}
