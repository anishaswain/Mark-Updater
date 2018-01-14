var express = require('express');
var router = express.Router();
var path = require("path");

var database = require('../database.js');
/* GET home page. */
router.get('/',function(req,res){
	database.connection.query('SELECT SEM FROM '+database.tablename+' GROUP BY SEM;', function(error,results,fields) {
		res.render('index',{sems : results});
	});
});

router.get('/api/:sem/getbranch', function(req,res){
	var query = 'SELECT BRANCH FROM '+database.tablename+' WHERE SEM = "'+req.params.sem+'" GROUP BY BRANCH;';
	database.connection.query(query, function(error,results,fields) {
		if(error){
			console.log(error);
		}else{
			res.send(results);
		}
	});
});
module.exports = router;
