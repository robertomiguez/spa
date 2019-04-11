module.exports = app => {
  const addressController = require('../controller/addressController'),
    userController = require('../controller/userController'),
    schemaValidator = require('../schemas/schemaValidator')

  app.route('/postcode')
    .get(userController.IsUserLogged, addressController.getPostcodes)

  app.route('/address')
    .get(userController.IsUserLogged, addressController.getUserAddressByUserID)
    .post(userController.IsUserLogged, schemaValidator.validAddress, addressController.createAddress)

  app.route('/address/:id')
    .put(userController.IsUserLogged, schemaValidator.validAddress, addressController.updateAddress)
    .delete(userController.IsUserLogged, addressController.deleteAddress) // logical

  app.route('/address/expired')
    .get(userController.IsUserLogged, addressController.getUserExpiredAddressByUserID)
}
