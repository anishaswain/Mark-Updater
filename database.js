var mysql = require("mysql");

//set connection to database
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "chipkili123",
  database: "testdb"
});
 
var tablename= "test";
module.exports = {
  tablename : tablename,
  connection : con
}