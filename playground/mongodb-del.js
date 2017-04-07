const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server', err)
  }
  console.log('Connected to MongoDB server!')

  // deleteMany
  // db.collection('Users').deleteMany({name: 'Matt Walker beotches'}).then((result) => {
  //   console.log(result)
  // })

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat dinner'}).then((result) => {
  //   console.log(result)
  // })

  // findOneAndDelete
  db.collection('Users').findOneAndDelete({_id: new ObjectID('58e68e4e652b5f260bcfab03')}).then((result) => {
    console.log(result)
  })

})
