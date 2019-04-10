const models = require('../model/priceModel')

exports.getTreatments = async (req, res, next) => {
  try {
    let treatments = await models.Treatments.find({}, {})
    if (treatments.length) {
      res.json(treatments)
    } else {
      res.status(406).json('Treatment not found')
    }
  } catch (error) {
    next(error)
  }
}

exports.createPrice = async (req, res, next) => {
  try {
    let price = new models.Prices({
      duration: req.body.duration,
      value: req.body.value,
      id_treatment: req.body.idTreatment,
      expired: null
    })
    await price.save()
    res.status(201).json(price)
  } catch (error) {
    next(error)
  }
}

// logical deletion
exports.deletePrice = async (req, res, next) => {
  if (!req.params.id.match(/^[0-9a-f]{24}$/)) {
    return res.status(406).json('{Invalid Object Id}')
  }
  try {
    let price = await models.Prices.findByIdAndUpdate(req.params.id, { $set: { expired: new Date() } }, { new: true })
    if (price) {
      res.status(204).json(price)
    } else {
      res.status(404).json('Price Not Found')
    }
  } catch (error) {
    next(error)
  }
}

exports.updatePrice = async (req, res, next) => {
  if (!req.params.id.match(/^[0-9a-f]{24}$/)) {
    return res.status(406).json('{Invalid Object Id}')
  }
  try {
    let price = await models.Prices.findByIdAndUpdate(req.params.id, { $set: { duration: req.body.duration, value: req.body.value, id_treatment: req.body.idTreatment } }, { new: true })
    if (price) {
      res.status(201).json(price)
    } else {
      res.status(404).json('Price Not Found')
    }
  } catch (error) {
    next(error)
  }
}

exports.getPrices = async (req, res, next) => {
  try {
    let price = await models.PricesViews.find({ expired: null })
    if (price.length) {
      res.json(price)
    } else {
      res.status(404).json('price Not Found')
    }
  } catch (error) {
    next(error)
  }
}

exports.getExpiredPrices = async (req, res, next) => {
  try {
    let price = await models.PricesViews.find({ expired: { $ne: null } })
    if (price.length) {
      res.json(price)
    } else {
      res.status(404).json('price Not Found')
    }
  } catch (error) {
    next(error)
  }
}
