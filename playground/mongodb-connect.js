const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server', err)
  }
  console.log('Connected to MongoDB server!')

  // db.collection('Todos').insertOne({
  //   text: 'Something to do meow',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err)
  //   }
  //   console.log(JSON.stringify(result.ops, null, 2))
  // })

  // db.collection('Users').insertOne({
  //   name: 'Matt Walker beotches',
  //   age: 36,
  //   location: 'Portland, OR'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err)
  //   }
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), null, 2))
  // })
  //
  // db.close()
})
