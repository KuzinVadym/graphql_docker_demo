const express = require('express')
const db = require('./db')
let Group = require('./db/models/group');
const app = express()

db.initializeMongo();

app.get('/', function (req, res) {
  res.send('Hello World Groups!')
})

app.get('/testGroups', function (req, res) {
  Group.find(function (err, groups) {
    if (err) return res.error(err);
    console.log(groups);
    res.json(groups);
  })
});

app.get('/api/groups/first', function (req, res) {
  console.log("Get first Group Data");
  Group.find(function (err, groups) {
    if (err) return res.error(err);
    console.log(groups);
    if(groups&&groups.length>0){
      res.json(groups[0]);
    }else {
      res.json({});
    }
  })
});

app.get('/api/groups/test', function (req, res) {
  console.log("Get Group Test");
  res.json("Hello from Group");
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
})
