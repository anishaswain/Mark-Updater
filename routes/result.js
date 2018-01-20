var express = require('express');
var database = require('../database.js');
var path = require("path");
var mysql = require("mysql");
var router = express.Router();

/* GET users listing. */
// router.get('/:sem/:branch/:sub_code', function(req, res, next) {
//   query = "Select * FROM "+database.tablename+" WHERE BRANCH = '" +req.params.branch+"' AND Sub_Code = '"+req.params.sub_code+"' AND sem = '"+req.params.sem+"';";
//   database.connection.query(query,function(error,results,fields){
//     if(error){
//       console.log("Error found");
//     }else{
//       res.render('result',{results:results, branch:req.params.branch, subject:req.params.subject});
//     }
//      //
//   });
// });

router.post('/',function(req,res,next){
  console.log("got POST request");
  console.log(req.body.sem_select);
  console.log(req.body.branch_select);
  console.log(req.body.subject_select);
  console.log(req.body);
  var s = "Select * FROM "+database.tablename+" WHERE "
  console.log(s);
  if(req.body.sem_select){
    s = s+"SEM = '" +req.body.sem_select+"' AND "
  }
  if(req.body.branch_select){
    s = s+"BRANCH = '" +req.body.branch_select+"' AND "
  }
  if(req.body.subject_select){
    s = s+"Sub_Code = '" +req.body.subject_select + "' AND'"
  }
  //s = s .slice(-3);
  s = s.slice(0, -5 );
  s = s + ';'
  console.log(s);
  database.connection.query(s,function(error,results,fields){
    if(error){
      console.log("Error found");
    }else{
      res.render('result',{results:results, branch:req.body.branch_select, subject:req.body.subject_select});
    }
     //
  });
});;
 
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
