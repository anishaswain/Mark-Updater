var express = require('express');
var router = express.Router();
var path = require("path");
module.exports = router;
var database = require("../database.js");
var mysql = require("mysql");


/* GET home page. */
router.get('/',function(req,res){
	console.log("Got get request");
	res.sendFile(path.join(__dirname,'../login.html'));
});

router.post('/', function(req,res){
	console.log("Got post request from login");
	console.log(req.body);
	query = "Select * FROM "+database.tablename1+ " WHERE email = '" +req.body.email+ "' AND password = '" +req.body.password+"';";
	database.connection.query(query,function(error,results,fields){
	    if(error){
	      console.log("Error found");
	    }else{
	      console.log(results);
	      if (!results){
	      	console.log("login successful");
	      }else{
	      	console.log("invalid login");
	      }
	    }
	});
});
