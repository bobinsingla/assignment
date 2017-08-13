"use strict";
var mongoose = require('mongoose');

var user = require('./user');
var userContact = require('./user-contact');

module.exports = function(app){
	//Constructor
	var init = function(){
		mongoose.connect('mongodb://localhost/user');
	};


	return{
		init: init
	}
};