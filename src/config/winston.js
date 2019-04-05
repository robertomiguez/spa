const winston = require('winston'),
  MESSAGE = Symbol.for('message')

const jsonFormatter = (logEntry) => {
  const base = { timestamp: new Date() },
    json = Object.assign(base, logEntry)
  logEntry[MESSAGE] = JSON.stringify(json)
  return logEntry
}

const logger = winston.createLogger({
  level: 'silly',
  format: winston.format(jsonFormatter)(),
  transports: [
    // new winston.transports.Console(), //added below if is not in prod
    new winston.transports.File({ filename: 'error.log', level: 'error' }), // error
    new winston.transports.File({ filename: 'info.log', level: 'info' }), // info, warn, error
    new winston.transports.File({ filename: 'silly.log', level: 'silly' }) // all
  ]
})

// if (process.env.NODE_ENV !== 'production') {
//  logger.add(new winston.transports.Console({
//    format: winston.format.colorize()
//  }))
// }

module.exports = logger
