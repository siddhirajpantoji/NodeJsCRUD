// Constructor  for Employee class

module.exports = {
  Employee:function Employee(){
    this.employeeId = "",
    this.employeeName = "",
    this.employee_dob = "";
    this.convertDate = function convertDate() {
      return this.employee_dob
    }
}
};
