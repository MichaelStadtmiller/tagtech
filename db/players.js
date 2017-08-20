var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var db = require('./dbConfig');

var PlayerSchema = mongoose.Schema({
  uid : String,
  location : {
    lat : Number,
    long : Number
  },
  monster: Boolean,
  distance : Number,
  hold : {type: Date, default: null}//,
  //dt_create: Date,
  //dt_call_home: Date
});

var Player = mongoose.model('Players', PlayerSchema);

module.exports = Player;