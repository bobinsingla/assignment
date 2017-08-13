"use strict";

var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var userSchema = mongoose.Schema({
	_id: {
		type: String
	},
	user_firstname: {
		type: String
	},
	user_lastname:{
		type: String
	},
	user_age: {
		type: String
	},
	user_email:{
		type: String
	},
	user_country: {
		type: String
	},
	/*user_contact_details: {
		type: ObjectId, 
		ref: 'user_contact_detail'
	}*/
})


module.exports =  mongoose.model("user", userSchema);
