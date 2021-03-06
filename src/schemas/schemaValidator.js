const Joi = require('joi')

const schema = require('./schema')

exports.validCreateUser = (req, res, next) => {
  const result = Joi.validate(req.body, schema.schemaCreateUser)
  if (result.error) {
    return res.status(406).json(result.error.details[0])
  }
  next()
}

exports.validLoginUser = (req, res, next) => {
  const result = Joi.validate(req.body, schema.schemaLoginUser)
  if (result.error) {
    return res.status(406).json(result.error.details[0])
  }
  next()
}

exports.validAddress = (req, res, next) => {
  const result = Joi.validate(req.body, schema.schemaAddress)
  if (result.error) {
    return res.status(406).json(result.error.details[0])
  }
  next()
}

exports.validPrice = (req, res, next) => {
  const result = Joi.validate(req.body, schema.schemaPrice)
  if (result.error) {
    return res.status(406).json(result.error.details[0])
  }
  next()
}

exports.validAppointment = (req, res, next) => {
  const result = Joi.validate(req.body, schema.schemaAppointment)
  if (result.error) {
    return res.status(406).json(result.error.details[0])
  }
  next()
}
