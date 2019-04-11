module.exports = app => {
  const appointmentController = require('../controller/appointmentController'),
    userController = require('../controller/userController'),
    schemaValidator = require('../schemas/schemaValidator')

  app.route('/appointment')
    .get(userController.IsUserLogged, appointmentController.getAppointmentByUserID)
    .post(userController.IsUserLogged, schemaValidator.validAppointment, appointmentController.createAppointment)
  app.route('/appointment/:id')
    .put(userController.IsUserLogged, schemaValidator.validAppointment, appointmentController.updateAppointment)
    .delete(userController.IsUserLogged, appointmentController.deleteAppointment)
}
