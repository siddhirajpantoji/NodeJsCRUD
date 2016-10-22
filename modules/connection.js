var mysql      = require('mysql');
var employee = require('./employeeClass');
var getResultSetFromQuery = function getResultSetForQuery(queryToExecute) {
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    database : 'test',
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
	console.log(rows);
    	console.log('The solution is: ',rows);
    	console.log(fields[0].name);
    	console.log("reached result");
	return rowsExtracted(rows);
  });
console.log("End Called here ");
  connection.end();
}
module.exports =
{
  getResultSetFromQuery: getResultSetFromQuery
};

function rowsExtracted(rows,err) {
 if (err) throw err;
console.log("Entered into rowsExtracted");
console.log(rows);
var result =[];
console.log(rows.length);
  for(var counter =0;counter < rows.length;counter++ )
  {
    console.log("reached here for rows interation ");
    var employeeObj = new employee.Employee();
    employeeObj.employeeId = rows[counter].employee_id;
    employeeObj.employeeName = rows[counter].employee_name;
    employeeObj.employee_dob = rows[counter].employee_dob;
console.log(employeeObj);
    result.push(employeeObj);
  }
  console.log("In Mid "+result.toString());
  return result;
}
