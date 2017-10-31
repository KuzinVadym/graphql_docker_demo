console.log("Oh Yeah!")
const express = require('express')
const db = require('./db')
let User = require('./db/models/user');
const app = express()

db.initializeMongo();

app.get('/', function (req, res) {
  res.send('Hello World 228!')
})

app.get('/testFind', function (req, res) {
  User.find(function (err, users) {
    if (err) return res.error(err);
    console.log(users);
    res.json(users);
  })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})