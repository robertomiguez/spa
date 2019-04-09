const Joi = require('joi')

exports.schemaCreateUser = {
  name: Joi.string().required().min(3),
  email: Joi.string().required().email({ minDomainAtoms: 2 }),
  mobile: Joi.string().required().min(11).max(11),
  password: Joi.string().required().min(6).max(20)
}

exports.schemaLoginUser = {
  email: Joi.string().required().email({ minDomainAtoms: 2 }),
  password: Joi.string().required().min(6).max(20)
}

exports.schemaAddress = {
  number: Joi.number().required().max(100000),
  idPostcode: Joi.string().required()
}
