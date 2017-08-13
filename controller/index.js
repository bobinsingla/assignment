"use strict";

module.exports = function(app){
 	var init = function(){
	};

	var user = require('./user')(app);

 	return {
 		init: init,
 		user: user,
  	};
};