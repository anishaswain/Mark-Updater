var express = require('express');
var database = require('../database.js');
var router = express.Router();

/* GET users listing. */
router.get('/:sem/:branch/:subject', function(req, res, next) {
  query = "Select * FROM "+database.tablename+" WHERE BRANCH = '" +req.params.branch+"';";
  database.connection.query(query,function(error,results,fields){
    if(error){
      console.log("Error found");
    }else{
      res.render('result',{results:results, branch:req.params.branchid, subject:"All Subjects"});
      res.redirect('/:sem/:branch/:subject');
    }
  });
});

// router.get('/:branchid/:subject_code', function(req, res, next) {
//   query = "Select * FROM "+database.tablename+" WHERE BRANCH = '" +req.params.branchid+"' AND Sub_Code = '"+req.params.subject_code+"';";
//   database.connection.query(query,function(error,results,fields){
//     if(error){
//       console.log("Error found");
//     }else{
//       res.render('result',{results:results, branch:req.params.branchid, subject:req.params.subject_code});
//     }
//   });
// });

module.exports = router;
