const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  ObjectId = mongoose.Schema.Types.ObjectId
mongoose.set('debug', process.env.NODE_ENV !== 'production')

let appointmentSchema = new Schema({
  datetime: { type: Date, required: true },
  discount: { type: Number, required: true, min: 0 },
  id_user: { type: ObjectId, required: true },
  id_price: { type: ObjectId, required: true },
  id_address: { type: ObjectId, required: true }
})
let Appointments = mongoose.model('appointments', appointmentSchema)

let appointmentViewSchema = new Schema({
  id_user: { type: ObjectId, required: true },
  number: { type: Number, required: true, max: 100000 },
  postcode: { type: String, required: true, max: 6 },
  name: { type: String, required: true, max: 50, min: 5 },
  description: { type: String, required: true, max: 200, min: 5 },
  duration: { type: Number, required: true, max: 2, min: 1 },
  value: { type: Number, required: true, min: 0 },
  expired: { type: Date, required: false },
  datetime: { type: Date, required: true },
  discount: { type: Number, required: true, min: 0 }
})
let AppointmentsViews = mongoose.model('appointments_views', appointmentViewSchema)

module.exports = { Appointments, AppointmentsViews }
