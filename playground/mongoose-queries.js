const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')


const id = '58e828a746cb59864f247428'

if (!ObjectID.isValid(id)) {
  return console.log('Id invalid!')
}
//
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos)
// })
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo)
// })

Todo.findById(id).then((todo) => {
   if (!todo) {
     return console.log('Todo not found')
   }
  console.log('Todo by Id', todo)
}).catch((err) => console.log(err))

// query the users collection with an ID
User.findById(id).then((user) => {
   if (!user) {
     return console.log('User not found')
   }
  console.log('User by Id', user)
}).catch((err) => console.log(err))
