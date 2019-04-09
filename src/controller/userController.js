const User = require('../model/userModel'),
  bcrypt = require('bcrypt')

exports.createUser = async (req, res, next) => {
  let user = new User(
    {
      name: req.body.name,
      email: req.body.email,
      mobile: req.body.mobile,
      password: req.body.password
    }
  )
  try {
    await user.save()
    req.session.userId = user._id
    res.status(201).json(user)
  } catch (error) {
    next(error)
  }
}

exports.loginUser = async (req, res, next) => {
  let email = req.body.email,
    password = req.body.password

  try {
    let user = await User.findOne({ email: email }, { })
    if (!user) {
      return res.status(403).json('{ user or password invalid }')
    }
    let match = await bcrypt.compare(password, user.password)
    if (match) {
      req.session.userId = user._id
      res.json('{ user logged }')
    } else {
      res.status(403).json('{ user or password invalid }')
    }
  } catch (error) {
    next(error)
  }
}

exports.getUser = async (req, res, next) => {
  try {
    let user = await User.findById(req.session.userId, { _id: 0, __v: 0, password: 0 })
    if (user) {
      res.json(user)
    } else {
      res.status(403).json('{ user not logged }')
    }
  } catch (error) {
    next(error)
  }
}

exports.logoutUser = (req, res, next) => {
  try {
    if (req.session) {
      req.session.destroy()
      res.json('{ user logged out }')
    }
  } catch (error) {
    next(error)
  }
}

exports.IsUserLogged = (req, res, next) => {
  try {
    if (req.session.userId) {
      next()
    } else {
      res.status(403).json('{ user not logged }')
    }
  } catch (error) {
    next(error)
  }
}
