const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  ObjectId = mongoose.Schema.Types.ObjectId
mongoose.set('debug', process.env.NODE_ENV !== 'production')

let postcodeSchema = new Schema({
  postcode: { type: String, required: true, max: 6 },
  attend: { type: Boolean, required: true }
})
let Postcodes = mongoose.model('postcodes', postcodeSchema)

let addressSchema = new Schema({
  number: { type: Number, required: true, max: 100000 },
  id_postcode: { type: ObjectId, required: true },
  id_user: { type: ObjectId, required: true },
  expired: { type: Date, required: false }
})
let Addresses = mongoose.model('addresses', addressSchema)

let addressesViewSchema = new Schema({
  id_user: { type: ObjectId, required: true },
  name: { type: String, required: true, max: 50 },
  email: { type: String, required: true, max: 50 },
  mobile: { type: String, required: true, max: 11 },
  number: { type: Number, required: true, max: 100000 },
  postcode: { type: String, required: true, max: 6 }
})
let AddressesViews = mongoose.model('addresses_views', addressesViewSchema)

module.exports = { Postcodes, Addresses, AddressesViews }
