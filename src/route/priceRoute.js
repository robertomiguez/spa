module.exports = app => {
  const priceController = require('../controller/priceController'),
    userController = require('../controller/userController'),
    schemaValidator = require('../schemas/schemaValidator')

  app.route('/treatment')
    .get(userController.IsUserLogged, priceController.getTreatments)

  app.route('/price')
    .get(userController.IsUserLogged, priceController.getPrices)
    .post(userController.IsAdministratorLogged, schemaValidator.validPrice, priceController.createPrice)
  app.route('/price/:id')
    .put(userController.IsAdministratorLogged, schemaValidator.validPrice, priceController.updatePrice)
    .delete(userController.IsAdministratorLogged, priceController.deletePrice)
  app.route('/price/expired')
    .get(userController.IsUserLogged, priceController.getExpiredPrices)
}
