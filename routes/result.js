var express = require('express');
var router = express.Router();
var database = require('../database.js');
/* GET users listing. */
router.get('/:branchid', function(req, res, next) {
  query = "Select * FROM "+database.tablename+" WHERE BRANCH = '" +req.params.branchid+"';";
  database.connection.query(query,function(error,results,fields){
    if(error){
      console.log("Error found");
    }else{
      res.render('result',{results:results});
    }
  });
});

module.exports = router;
