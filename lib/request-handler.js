var db = require('../db/dbConfig');
var Player = require('../db/players');
var sessionHandler = require('./session-handler');

exports.getIndex = function(req, res) {

  console.log('INDEX')

  var newPlayer = {
    uid : 12347,
    location : {
      lat : 39.1098399,
      long : -84.5155674
    },
    monster: true,
    distance : null,
    hold : null
  }

  new Player(newPlayer).save(function(err, player) {
      if (err) {
        console.log(err)
      } else {
        console.log('Success creating player')
        res.sendFile('index')
      }
  });
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

exports.dropHold = function(req, res) {

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