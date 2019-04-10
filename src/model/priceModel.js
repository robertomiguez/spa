const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  ObjectId = mongoose.Schema.Types.ObjectId
mongoose.set('debug', process.env.NODE_ENV !== 'production')

let treatmentSchema = new Schema({
  name: { type: String, required: true, max: 50, min: 5 },
  description: { type: String, required: true, max: 200, min: 5 }
})
let Treatments = mongoose.model('treatments', treatmentSchema)

let priceSchema = new Schema({
  duration: { type: Number, required: true, max: 2, min: 1 },
  value: { type: Number, required: true, min: 0 },
  id_treatment: { type: ObjectId, required: true },
  expired: { type: Date, required: false }
})
let Prices = mongoose.model('prices', priceSchema)

let priceViewSchema = new Schema({
  duration: { type: Number, required: true, max: 2, min: 1 },
  value: { type: Number, required: true, min: 0 },
  id_treatment: { type: ObjectId, required: true },
  expired: { type: Date, required: false },
  name: { type: String, required: true, max: 50, min: 5 },
  description: { type: String, required: true, max: 200, min: 5 }
})
let PricesViews = mongoose.model('prices_views', priceViewSchema)

module.exports = { Treatments, Prices, PricesViews }
