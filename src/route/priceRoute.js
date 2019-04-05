module.exports = app => {
  const priceController = require('../controller/priceController.js')

  app.route('/area')
    .get(priceController.getListArea)
    .post(priceController.createArea)

  app.route('/area/:id')
    .get(priceController.getArea)
    .put(priceController.updateArea)
    .delete(priceController.deleteArea)
}
