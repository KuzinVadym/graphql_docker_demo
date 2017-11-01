const express = require('express')
const db = require('./db')
let User = require('./db/models/user');
let reqOptions = require('./helpers/reqOptions');
let request = require('request');

const app = express()

db.initializeMongo();

app.get('/', function (req, res) {
  res.send('Hello World Users!')
})

app.get('/testUsers', function (req, res) {
  User.find(function (err, users) {
    if (err) return res.error(err);
    console.log(users);
    res.json(users);
  })
})
app.get('/addNewUser', function (req, res) {
  getGroupInfo()
  .then(group=>{
    var user = new User({
      vorname: 'Vorname' + Math.random(),
      nachname: 'Nachname' + Math.random(),
      groupId: group._id,
      phone: '0176'+Math.random()
    });

    user.save(function (err, newuser) {
      if (err) return console.error(err);
      console.log('There is a new User to Group '+group._id);
      res.json(newuser);
    });
  })
  .catch( err => console.log(err) );
});

function getGroupInfo() {
  return new Promise(function(resolve, reject) {
    let url = 'http://groups_server:3001/api/groups/first';
    request(reqOptions(url), (error, response, group) => {
      if (error) reject(error);
      console.log(group);
      resolve(group);
    });
  });
}

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})