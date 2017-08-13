"use strict";

var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var user 

var userContactSchema = mongoose.Schema({
	user_id:{
		type: String, 
		ref: 'user'
	},
	contact_id:{
		type: String
	},
	phone_number: {
		type: String
	},
	comments: {
		type: String
	}
})

module.exports = mongoose.model("user_contact_detail",userContactSchema );