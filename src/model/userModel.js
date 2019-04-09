const mongoose = require('mongoose'),
  bcrypt = require('bcrypt'),
  Schema = mongoose.Schema
// mongoose.set('debug', process.env.NODE_ENV !== 'production')

let usersSchema = new Schema({
  name: { type: String, required: true, max: 50 },
  email: { type: String, required: true, max: 50 },
  mobile: { type: String, required: true, max: 11 },
  password: { type: String, required: true, max: 20 }
})

usersSchema.pre('save', function (next) {
  var user = this
  bcrypt.hash(user.password, 10, function (err, hash) {
    if (err) {
      return next(err)
    }
    user.password = hash
    next()
  })
})

module.exports = mongoose.model('users', usersSchema)
