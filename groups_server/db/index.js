const mongoose = require('mongoose');
let Group = require('./models/group');

const db_conn = 'mongodb://mongo/graph_docker_demo';

exports.initializeMongo = function() {
  mongoose.connect(db_conn);

  console.log('Trying to connect to ' + db_conn);

  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error: We might not be as connected as I thought'));
  db.once('open', function() {
    console.log('We are connected you and I!');
    //addRandomGroup();
  });
}

var addRandomGroup = function() {
  var group = new Group({
    name: 'Group name' + Math.random(),
    members: 0,
    description: 'Group description' + Math.random(),
  });

  group.save(function (err, fluffy) {
    if (err) return console.error(err);
    console.log('There is a new random Group in the App');
  });
}