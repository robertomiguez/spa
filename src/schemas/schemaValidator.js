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

