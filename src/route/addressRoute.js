module.exports = app => {
  const addressController = require('../controller/addressController'),
    userController = require('../controller/userController')

  app.route('/postcode')
    .get(userController.IsUserLogged, addressController.getPostcodes)

  app.route('/address')
    .get(userController.IsUserLogged, addressController.getUserAddressByUserID)
    .post(userController.IsUserLogged, addressController.createAddress)
    .put(userController.IsUserLogged, addressController.updateAddress)
    .delete(userController.IsUserLogged, addressController.deleteAddress) // logical

  app.route('/address/expired')
    .get(userController.IsUserLogged, addressController.getUserExpiredAddressByUserID)
}
