var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var db = require('dbConfig');

var PlayerSchema = new Schema({
  uid : String;
  location : {
    x : Number,
    y : Number
  },
  monster: Boolean,
  distance : Number,
  hold : {type: Date, default: Date.now()}
});

var Player = mongoose.model('Player', PlayerSchema);

module.exports = Player;