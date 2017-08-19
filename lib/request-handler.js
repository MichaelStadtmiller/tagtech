var db = require('../db/dbConfig');
var Player = require('../db/players');
var sessionHandler = require('session-handler');

exports.getIndex = function(req, res) {
  var sessionHandler.createSession();

  res.render('index');
};

exports.getUsers = function(req, res) {

};s

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
