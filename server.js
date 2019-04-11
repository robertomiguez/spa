const express = require('express'),
  session = require('express-session'),
  bodyParser = require('body-parser'),
  app = express(),
  logger = require('./src/config/winston'),
  port = process.env.PORT || 3001,
  ip = process.env.IP || '0.0.0.0',
  userRoute = require('./src/route/userRoute'),
  addressRoute = require('./src/route/addressRoute'),
  priceRoute = require('./src/route/priceRoute'),
  appointmentRoute = require('./src/route/appointmentRoute'),
  { mongoConn, setHeaders, errorHandler } = require('./src/config/utils')

app.use(session({
  secret: 'jhdwjndwn32n23njn23m6m90nwe4j5',
  resave: true,
  saveUninitialized: false
}))

mongoConn()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Add headers
setHeaders(app)

// routes
userRoute(app)
addressRoute(app)
priceRoute(app)
appointmentRoute(app)
app.route('*')
  .get((req, res) => {
    res.status(404).json({ error: 'Sorry, url not found.' })
  })

// error handler middleware.
app.use(errorHandler)

module.exports = app.listen(port, ip)// .setTimeout(5000)

logger.info(`Server started on IP: ${ip}: porta: ${port}`)
