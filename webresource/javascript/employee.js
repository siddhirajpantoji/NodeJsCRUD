
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
              dataToAppend =   dataToAppend+"<td>"+jsonData[countOfRows].employeeDateOfBirth+"</td>";
              dataToAppend =   dataToAppend +"</tr>";
            }
            $("#dataTableBody").append(dataToAppend);
        }
    });
});
