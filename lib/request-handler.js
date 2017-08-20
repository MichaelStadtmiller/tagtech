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
  if (req.method == "POST"){
    var uid = req.body.uid;
    Player.findOneAndUpdate({uid:uid},{monster:true},{upsert:true}, function(err, doc){
      if (err) return res.send(500, { error: err });
      return res.send("succesfully saved");
    });
  }
};

exports.dropMonster = function(req, res) {
  if (req.method == "POST"){
    var uid = req.body.uid;
    Player.findOneAndUpdate({uid:uid},{monster:false},{upsert:true}, function(err, doc){
      if (err) return res.send(500, { error: err });
      return res.send("succesfully saved");
    });
  }
};

exports.dropHold = function(req, res) {
  if (req.method == "POST"){
    var uid = req.body.uid;
    Player.findOneAndUpdate({uid:uid},{hold:null},{upsert:true}, function(err, doc){
      if (err) return res.send(500, { error: err });
      return res.send("succesfully saved");
    });
  }
};

// exports.get12346 = function(req, res) {
//   console.log('GET 12346')
//   Player.find({uid:"12346"}, function(err, results) {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log('RESULTS IS ', results)
//       res.send(results)
//     }
//   });
// };
