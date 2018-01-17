var express = require('express');
var router = express.Router();
var path = require("path");
var database = require("../database.js");
var mysql = require("mysql");

/* GET home page. */
router.get('/',function(req,res){
	console.log("Got get request");
	res.sendFile(path.join(__dirname,'../signup.html'));
});

router.post('/', function(req,res,next){
	// database.con(function(err){
  //
	// 	if (err) throw err;
	// 	console.log("Connected!");
	  var sql= "INSERT INTO "+ database.tablename1+ "(name, email, password)" +" VALUES "+"("+req.body.name+","+req.body.email+","+req.body.pass+")"+";";
	  database.connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
	// });
	console.log("post request received");
});
module.exports = router;
