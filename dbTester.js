var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/todos')

mongoose.connection
  .once('open', () => {
    console.log('Connected to DB')
  })
  .on('error', err => {
    console.log('Error', err)
  })

var TodoSchema = new mongoose.Schema({
  name: String,
  completed: Boolean
})

var Todo = mongoose.model('todo', TodoSchema)
Todo.create({
  name: 'clean up your room!!!',
  completed: false
}).then(function (err, todo) {
  console.log(err, todo)
})
