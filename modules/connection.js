var mysql      = require('mysql');
var getResultSetFromQuery = function getResultSetForQuery(queryToExecute,rowsIn,result) {
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    database : 'employee',
    password : 'root'
  });

  //connection.connect();

  connection.connect(function(err){
    if(err){
      console.log(err);
      console.log('Error connecting to Db');
      return;
    }
    console.log('Connection established');
  });

  connection.query(queryToExecute, function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ',rows[0].employee_name);
    console.log(fields[0].name);
    console.log("reached result");
    return rowsIn(rows,result);
  //  console.log(rowsToReturn);
  });
  connection.end();
}
module.exports =
{
  getResultSetFromQuery: getResultSetFromQuery
};
