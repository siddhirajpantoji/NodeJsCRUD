 const connection = require('./connection');
const mysql      = require('mysql');
 var employee = require('./employeeClass');
var data = {
  employeeId:101,
  employeeName:"Siddhiraj",
  employeeDateOfBirth:"27-07-1990"
};



function getEmployeeData1(req,res)
{
console.log("Starting "+result);
var result = [];
//result = connection.getResultSetFromQuery("Select employee_id,employee_name,employee_dob from employee ");
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

  connection.query("Select employee_id,employee_name,employee_dob from employee ", function(err, rows, fields) {
    if (err) throw err;
	console.log(rows);
    	console.log('The solution is: ',rows);
    	console.log(fields[0].name);
    	console.log("reached result");
	//return rowsExtracted(rows);
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
	res.writeHead("200",{"Content-Type": "application/json"});
	res.end(JSON.stringify(result));
  });

console.log("Returning Result "+result);

}
module.exports ={
  getEmployeeData:getEmployeeData1
};
