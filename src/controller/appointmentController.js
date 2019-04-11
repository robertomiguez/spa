const models = require('../model/appointmentModel')

exports.createAppointment = async (req, res, next) => {
  try {
    let appointment = new models.Appointments({
      datetime: req.body.datetime,
      discount: req.body.discount,
      id_user: req.session.userId,
      id_price: req.body.idPrice,
      id_address: req.body.idAddress
    })
    await appointment.save()
    res.status(201).json(appointment)
  } catch (error) {
    next(error)
  }
}

exports.updateAppointment = async (req, res, next) => {
  try {
    let appointment = await models.Appointments.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
    if (appointment) {
      res.status(201).json(appointment)
    } else {
      res.status(404).json('Appointment Not Found')
    }
  } catch (error) {
    next(error)
  }
}

exports.deleteAppointment = async (req, res, next) => {
  if (!req.params.id.match(/^[0-9a-f]{24}$/)) {
    return res.status(406).json('{Invalid Object Id}')
  }
  try {
    let appointment = await models.Appointments.findByIdAndDelete(req.params.id)
    if (appointment) {
      res.status(204).json(appointment)
    } else {
      res.status(404).json('Appointment Not Found')
    }
  } catch (error) {
    next(error)
  }
}

exports.getAppointmentByUserID = async (req, res, next) => {
  try {
    let appointment = await models.AppointmentsViews.find({ 'id_user': req.session.userId })

    if (appointment.length) {
      res.json(appointment)
    } else {
      res.status(404).json('Appointment Not Found')
    }
  } catch (error) {
    next(error)
  }
}
