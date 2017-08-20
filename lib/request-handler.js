var db = require('../db/dbConfig');
var Player = require('../db/players');
var sessionHandler = require('./session-handler');
var request = require('request');
var crypto = require('crypto');

exports.getIndex = function(req, res) {

  console.log('INDEX')
  var shasum = crypto.createHash('sha1');
  var uid = shasum.update(url);
  console.log('USERID is now', uid );
  var newPlayer = {
    uid :  uid;
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