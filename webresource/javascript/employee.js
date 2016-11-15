
$(document).ready(function() {
    $.ajax({
        type: 'POST',
        url: '/employee',
        dataType: "json",
        data: {
        },
        success: function(data) {
            var jsonData  = data;
            var dataToAppend = "";
            for(var countOfRows = 0 ; countOfRows <jsonData.length ; countOfRows ++)
            {
              dataToAppend =   dataToAppend+ "<tr>";
              dataToAppend =   dataToAppend+ "<td>"+jsonData[countOfRows].employeeId+"</td>";
              dataToAppend =   dataToAppend+"<td>"+jsonData[countOfRows].employeeName+"</td>";
              dataToAppend =   dataToAppend+"<td>"+jsonData[countOfRows].employee_dob+"</td>";
              dataToAppend =   dataToAppend +"</tr>";
            }
            $("#dataTableBody").append(dataToAppend);	
        }
    });
});
