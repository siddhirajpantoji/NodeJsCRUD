 const connection = require('./connection');
 var employee = require('./employeeClass');
var data = {
  employeeId:101,
  employeeName:"Siddhiraj",
  employeeDateOfBirth:"27-07-1990"
};

var rowsToIterate = function rowsExtracted(rows,result) {
console.log(rows);
console.log(employee);
if(result === undefined )
{
  result = [];
}
  for(var counter =0;counter < rows.length;counter++ )
  {
    console.log("reached here for rows interation ");
    var employeeObj = new employee.Employee();
    employeeObj.employeeId = rows[counter].employee_id;
    employeeObj.employeeName = rows[counter].employee_name;
    employeeObj.employee_dob = rows[counter].employee_dob
    result.push(employeeObj);
  }
  console.log("In Mid "+result.toString());
  return result;
}
function getEmployeeData1(req,res)
{
console.log("Returning "+result);
var result = [];
  return connection.getResultSetFromQuery("Select employee_id,employee_name,employee_dob from employee ",rowsToIterate,result);

}
module.exports ={
  getEmployeeData:getEmployeeData1
};
