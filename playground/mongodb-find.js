// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// var user = {name: 'andrew', age: 25};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp')

  //Retrieve by count
    db.collection('Todos').find().count().then((count) => {
      console.log(`Todos count: {count}`);
      //console.log(JSON.stringify(docs, undefined, 2));
    },(err) => {
      console.log('Unable to fetch Todos', err);
    });

//Retrieve by id field
  // db.collection('Todos').find({_id: new ObjectID('5c45a455d4f12f1bc6532ee7')}).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // },(err) => {
  //   console.log('Unable to fetch Todos', err);
  // });

//Retrieve by field
  // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // },(err) => {
  //   console.log('Unable to fetch Todos', err);
  // });

//  db.close();
});
