const models = require('../model/addressModel')

exports.getPostcodes = async (req, res, next) => {
  try {
    let postcodes = await models.Postcodes.find({}, {})
    if (postcodes.length) {
      res.json(postcodes)
    } else {
      res.status(406).json('Postcode not found')
    }
  } catch (error) {
    next(error)
  }
}

exports.createAddress = async (req, res, next) => {
  try {
    let address = new models.Addresses({
      number: req.body.number,
      id_postcode: req.body.idPostcode,
      id_user: req.session.userId,
      expired: req.body.expired
    })
    await address.save()
    res.status(201).json(address)
  } catch (error) {
    next(error)
  }
}

exports.getUserAddressByUserID = async (req, res, next) => {
  try {
    let address = await models.AddressesViews.find({ 'id_user': req.session.userId, expired: null })

    if (address.length) {
      res.json(address)
    } else {
      res.status(404).json('Address Not Found')
    }
  } catch (error) {
    next(error)
  }
}

exports.getUserExpiredAddressByUserID = async (req, res, next) => {
  try {
    let address = await models.AddressesViews.find({ 'id_user': req.session.userId, expired: { $ne: null } })
    if (address.length) {
      res.json(address)
    } else {
      res.status(404).json('Expired address Not Found')
    }
  } catch (error) {
    next(error)
  }
}
// logical deletion
exports.deleteAddress = async (req, res, next) => {
  // if (!req.params.id.match(/^[0-9a-f]{24}$/)) {
  //  return res.status(406).json('{Invalid Object Id}')
  // }
  try {
    let address = await models.Addresses.findOneAndUpdate({ 'id_user': req.session.userId }, { $set: { expired: new Date() } }, { new: true })
    if (address) {
      res.status(204).json(address)
    } else {
      res.status(404).json('Address not Found')
    }
  } catch (error) {
    next(error)
  }
}

exports.updateAddress = async (req, res, next) => {
  // if (!req.params.id.match(/^[0-9a-f]{24}$/)) {
  //  return res.status(406).json('{Invalid Object Id}')
  // }
  try {
    let address = await models.Addresses.findOneAndUpdate({ 'id_user': req.session.userId }, { $set: { number: req.body.number, id_postcode: req.body.idPostcode } }, { new: true })
    if (address) {
      res.status(201).json(address)
    } else {
      res.status(404).json('Address Not Found')
    }
  } catch (error) {
    next(error)
  }
}
