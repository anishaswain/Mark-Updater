var mysql = require("mysql");

//set connection to database
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "omega160",
  database: "test"
});

var tablename= "students";
module.exports = {
  tablename : tablename,
  connection : con
}
