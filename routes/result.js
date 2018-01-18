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
  if(!req.body.sem_select & !req.body.branch_select & req.body.subject_select){
    //res.status(502).send('Insufficient field values');
    res.send("enter some data/empty fields are present");
  }else{
    console.log("abcd")
  }
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
