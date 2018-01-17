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
  console.log(req.params.mark);
  con.connect(function(err) {
  if (err) throw err;
  var query = "UPDATE"+ database.tablename + "SET mark = '"+req.params.mark+"' WHERE REGD_NO = '"+req.params.redg+"'";
  con.query(query, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
});
 
});

module.exports = router;
