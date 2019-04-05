const mongoose = require('mongoose')
// mongoose.set('debug', process.env.NODE_ENV !== 'production')
const Schema = mongoose.Schema

let areaSchema = new Schema({
  postcode: { type: String, required: true, max: 6 }
})

module.exports = mongoose.model('area', areaSchema)
