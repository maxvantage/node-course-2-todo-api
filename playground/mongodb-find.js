const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server', err)
  }
  console.log('Connected to MongoDB server!')

  // db.collection('Todos').find().toArray().then((docs) => {
  //   console.log('Todos')
  //   console.log(JSON.stringify(docs, null, 2))
  // }, (err) => {
  //   console.log('Unable to fetch Todos', err)
  // })

  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count: ${count}`)
  }, (err) => {
    console.log('Unable to fetch Todos', err)
  })

  db.collection('Users').find({name: 'Matt Walker beotches'}).count().then((count) => {
    console.log(`Users count: ${count}`)
  }, (err) => {
    console.log('Unable to fetch Todos', err)
  })

})
