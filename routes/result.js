var express = require('express');
var database = require('../database.js');
var router = express.Router();

/* GET users listing. */
router.get('/:sem/:branch/:sub_code', function(req, res, next) {
  query = "Select * FROM "+database.tablename+" WHERE BRANCH = '" +req.params.branch+"' AND Sub_Code = '"+req.params.sub_code+"' AND sem = '"+req.params.sem+"';";
  database.connection.query(query,function(error,results,fields){
    if(error){
      console.log("Error found");
    }else{
      res.render('result',{results:results, branch:req.params.branch, subject:req.params.subject});
    }
     //
  });
});
 
router.get('/:redg/:mark', function(req, res, next) {
  var query = "UPDATE "+ database.tablename + " SET mark = '"+req.params.mark+"' WHERE REGD_NO = '"+req.params.redg+"';";
  console.log(query);
  database.connection.query(query, function (err, results, fields) {
    if (err){ 
      throw err;
    }else{
    console.log(results.affectedRows + " record(s) updated");
    res.send(results)}
  });
});

module.exports = router;
