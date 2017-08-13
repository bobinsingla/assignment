"use strict";


module.exports = function(app){

	var express  = require('express');
	var controller = require('../controller')(app);
	var router = express.Router();
	

	var init = function(){
		route();
	}

	var route = function(){

		app.use('/api/v1/', router);

		router.post('/user', function(req, res){
			var userDetails = {
				user_id: "1",
				user_firstname: "aakash",
				user_lastname: "mittal",
				user_age: "20",
				user_email: "aakash.mittal@gmail.com",
				user_country: "India"
			}
			console.log(userDetails);
		    controller.user.createUser(userDetails, function(error, user){
		    	if(error){
		    		console.error(error.toString());
		    		res.send(500, error.toString());
		    	}else{
		    		console.log('user_details:', user)
		    	}	
		    })
		    
		});

		router.get('/user', function(req,res){
			controller.user.viewUser({}, 0, 5, function(err, user){
				console.log(user);
				if(err){
					console.error(err.toString());
				}else{
					res.send(user);
					//res.render({customerList});
				}
			})
		})

		router.post('/usercontact', function(req, res){
			var contact = [{ 
				user_id: "1",
				phone_number : "9876543211",
				comments : "primary_contact_number",
				contact_id : 1,
			},
			{ 
				user_id: "1",
				phone_number : "7865432101",
				comments : "secondary_contact_number",
				contact_id : 2,
			}]
			console.log(contact);
		    controller.user.createUserContact(contact, function(error, contact){
		    	if(error){
		    		console.error(error.toString());
		    		//res.send(500, error.toString());
		    	}else{
		    		console.log('user_details:', contact)
		    		res.send(contact);
		    	}	
		    })
		    
		});


		router.get('/usercontact', function(req,res){
			controller.user.viewUserContact({}, function(err, user_contact){
				console.log("user contact", user_contact);
				if(err){
					console.error(err.toString());
				}else{
					res.send(user_contact);
					//res.render({customerList});
				}
			})
		})
	}
	return{
		init:init
	}
};