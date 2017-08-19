var express = require('express');
var bodyParser = require('body-parser');
var MongoDBStore = require('connect-mongodb-session')(session);
var handler = require('request-handler');

var app = express();

app.use(express.static(__dirname + '/public'));

//serve index
app.get('/', handler.getIndex);

//get users information
app.get('/user_me', handler.getMe);
app.get('/user_monster', handler.getMonsterInfo);
app.get('/user_others', handler.getOthers);

//change user information
app.put('/my_location', handler.updateLocation);
app.put('unhold_me', handler.dropHold);

//for monster
app.put('/add_monster', handler.addMonster);
app.put('/drop_monster', handler.dropMonster);

module.exports = app;

