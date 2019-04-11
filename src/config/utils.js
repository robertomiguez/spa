const mongoose = require('mongoose'),
  logger = require('./winston')

const mongoConn = () => {
  let mongoURL
  if (process.env.MONGODB_SERVER_HOST) {
    mongoURL = `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_SERVER_HOST}:27017/${process.env.MONGODB_DATABASE}`
  } else {
    mongoURL = 'mongodb://127.0.0.1:27017/spadb'
  }
  logger.info('mongoURL: ' + mongoURL)
  mongoose.Promise = global.Promise
  mongoose.connect(mongoURL, { useNewUrlParser: true, useFindAndModify: false })
  const db = mongoose.connection
  db.on('error', logger.error.bind(console, 'connection error:'))
  db.once('open', () => logger.info('Database connection OK!'))
}

const setHeaders = (app) => {
  app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8082')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    res.setHeader('Access-Control-Allow-Credentials', true)
    next()
  })
}

// Handler for internal server errors
const errorHandler = (err, req, res, next) => {
  logger.error(err.message)
  logger.error(err.stack)
  res.status(err.status || 500).send({status: 500, message: err.message, type: 'internal'})
  next()
}

const randomNumber = () => Math.floor(Math.random() * (10000000 - 1 + 1)) + 1

module.exports = {
  mongoConn,
  setHeaders,
  errorHandler,
  randomNumber
}
