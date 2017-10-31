const mongoose = require('mongoose');
let User = require('./models/user');

const db_conn = 'mongodb://mongo/graph_docker_demo';

exports.initializeMongo = function() {
  mongoose.connect(db_conn);

  console.log('Trying to connect to ' + db_conn);

  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error: We might not be as connected as I thought'));
  db.once('open', function() {
    console.log('We are connected you and I!');
    addRandomUser();
  });
}

var addRandomUser = function() {
  var user = new User({
    vorname: 'Vorname' + Math.random(),
    nachname: 'Nachname' + Math.random(),
    phone: '0176'+Math.random()
  }
);

  user.save(function (err, fluffy) {
    if (err) return console.error(err);
    console.log('There is a new random User in the App');
  });
}