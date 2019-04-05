const Area = require('../model/areaModel')

exports.getListArea = async (req, res, next) => {
  try {
    let area = await Area.find({}, {})
    if (area) {
      res.json(area)
    } else {
      res.status(406).json('{ areas not found }')
    }
  } catch (error) {
    next(error)
  }
}

exports.createArea = async (req, res, next) => {
  try {
    let area = new Area({
      postcode: req.body.postcode
    })
    await area.save()
    res.status(201).json(area)
  } catch (error) {
    next(error)
  }
}

exports.getArea = async (req, res, next) => {
  if (!req.params.id.match(/^[0-9a-f]{24}$/)) {
    return res.status(406).json('{Invalid Object Id}')
  }
  try {
    let area = await Area.findById(req.params.id)
    if (area) {
      res.json(area)
    } else {
      res.status(404).json('{Not Found}')
    }
  } catch (error) {
    next(error)
  }
}

exports.updateArea = async (req, res, next) => {
  if (!req.params.id.match(/^[0-9a-f]{24}$/)) {
    return res.status(406).json('{Invalid Object Id}')
  }
  try {
    let area = await Area.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
    if (area) {
      res.status(200).json(area)
    } else {
      res.status(404).json('{Not Found}')
    }
  } catch (error) {
    next(error)
  }
}

exports.deleteArea = async (req, res, next) => {
  if (!req.params.id.match(/^[0-9a-f]{24}$/)) {
    return res.status(406).json('{Invalid Object Id}')
  }
  try {
    let area = await Area.findByIdAndRemove(req.params.id)
    if (area) {
      res.status(204).json('{ Area deleted }')
    } else {
      res.status(404).json('{Not Found}')
    }
  } catch (error) {
    next(error)
  }
}
