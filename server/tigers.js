// TODO: make a new router for the tigers resource
// and make some REST routes for it, exactly like for lions
// make a middleware that just logs the word 'tiger' to the console
// when a request comes in to the server

const tigerRouter = require('express').Router()

let id = 0
const tigers = []

tigerRouter.param('id', function (req, res, next, id) {
  const tiger = tigers.find(tiger => tiger.id === id)
  if (tiger) {
    req.tiger = tiger
    next()
  } else {
    next(new Error('No Tiger Found For The Given ID'))
  }
})

tigerRouter.get('/', function (req, res) {
  res.json(tigers)
})

tigerRouter.get('/:id', function (req, res) {
  res.json(req.tiger || {})
})

function updateId (req, res, next) {
  id++
  req.body.id = id + ''
  next()
}

tigerRouter.post('/', updateId, function (req, res) {
  const tiger = req.body
  tigers.push(tiger)
  res.json(tiger)
})

tigerRouter.put('/:id', function (req, res, next) {
  const update = req.body
  const index = tigers.findIndex(tiger => tiger.id === req.params.id)

  const updatedTiger = Object.assign(tigers[index], update)
  res.json(updatedTiger)
})

tigerRouter.delete('/:id', function (req, res, next) {
  const index = tigers.findIndex(tiger => tiger.id === req.params.id)
  const deletedTiger = tigers[index]
  tigers.splice(index, 1)
  res.json(deletedTiger)
})

module.exports = tigerRouter
