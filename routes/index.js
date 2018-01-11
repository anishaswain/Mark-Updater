var express = require('express');
var router = express.Router();
var path = require("path");
module.exports = router;


/* GET home page. */
router.get('/',function(req,res){
	console.log("Got get request");
	res.sendFile(path.join(__dirname,'../index.html'));
});

