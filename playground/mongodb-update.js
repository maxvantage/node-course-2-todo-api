const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server', err)
  }
  console.log('Connected to MongoDB server!')

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('58e69042e3c9c22789d9ec2d')
  }, {
    $set: {
      name: 'Matt Walker'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result)
  })
})
