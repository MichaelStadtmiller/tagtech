var db = require('../db/dbConfig');
var Player = require('../db/players');
var sessionHandler = require('./session-handler');
var request = require('request');

exports.createUser = function(req, res) {
  var user = req.body;
  console.log('INDEX');

  console.log('USERID is now', user );
  var newPlayer = {
    uid :  user.uid,
    location : {
      lat : user.lat,
      long : user.long
    },
    monster: user.monster,
    distance : user.distance,
    hold : user.hold,
    dt_call_home: user.dt_call_home
  }

  new Player(newPlayer).save(function(err, player) {
      if (err) {
        console.log(err)
      } else {
        console.log('Success creating player')
      }
  });
  res.send('NEW USER created')
};

exports.getUsers = function(req, res) {
  console.log('GET USER')
  Player.find({}, function(err, results) {
    if (err) {
      console.log(err)
    } else {
      console.log('RESULTS IS ', results)
      res.send(results)
    }
  });
};

exports.userCheckin = function(req, res) {

};

exports.updateLocation = function(req, res) {

};

exports.addMonster = function(req, res) {

};

exports.dropMonster = function(req, res) {

};

exports.dropHold = function(req, res, body) {
  if (req.method == "POST"){
    console.log('POSTING');
    var body = '';

  }
  res.send(results)

  //db.getCollection('players').find({uid:"12346"})
};

exports.get12346 = function(req, res) {
  console.log('GET 12346')
  Player.find({uid:"12346"}, function(err, results) {
    if (err) {
      console.log(err)
    } else {
      console.log('RESULTS IS ', results)
      res.send(results)
    }
  });
};