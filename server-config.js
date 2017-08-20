var express = require('express');
var bodyParser = require('body-parser');
var handler = require('./lib/request-handler.js');

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

//create new user
app.post('/newUser', handler.createUser);

//get users information
app.get('/users', handler.getUsers);

//update user information
app.put('/last_request', handler.userCheckin)
app.put('/user_location', handler.updateLocation);

//for monster
app.put('/add_monster', handler.addMonster);
app.put('/drop_monster', handler.dropMonster);

app.post('/unhold_me', handler.dropHold);

module.exports = app;

