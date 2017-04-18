const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')

Todo.findOneAndRemove({text: 'Eat some chicken broth'}).then((todo) => {
  console.log(todo)
})