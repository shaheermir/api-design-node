var express = require('express')
var app = express()
var api = require('./api/api')

// setup the app middlware
require('./middleware/appMiddlware')(app)

// setup the api
app.use('/api/', api)

// set up global error handling
app.use(function (err, req, res, next) {
  if (err) {
    res.status(500).json(err.message)
  }
})
// export the app for testing
module.exports = app
