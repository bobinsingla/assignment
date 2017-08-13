"use strict";

var userDetails = require('../models/user');
var userContact = require('../models/user-contact')

module.exports = function(app){
	var createUser = function(user, callback){
		var newUser = new userDetails({
			_id: user.user_id,
			user_firstname: user.user_firstname,
			user_lastname: user.user_lastname,
			user_age: user.user_age,
			user_email: user.user_email,
			user_country: user.user_country
		})
		newUser.save(callback);
	};

	var createUserContact = function(contact, callback){
		console.log("contact:", contact);
		userContact.insertMany(contact, callback);
	}

	var viewUser = function(filter, skip, limit, callback){
      filter  = filter || {};
      limit   = limit || 10;
      skip    = skip || 0;

      userDetails.find(filter).limit(limit).skip(skip).exec(callback);
 	}

 	var viewUserContact = function(filter, callback){
 		userContact.find(filter).populate("user_id").exec(callback);
 	}

     return {
        createUser: createUser,
        createUserContact: createUserContact,
        viewUser: viewUser,
        viewUserContact: viewUserContact
     };
};