

    tableData = ""
fetch("https://jsonplaceholder.typicode.com/users")
.then(val=>val.json())
.then(data => {
   
    // console.log(data);
    data.map( element => {
        tableData+= ` 
        <tr >

        <td>${element.name}</td>
        <td>${element.username}</td>
        <td>${element.email}</td>
        
        </tr>

        `


    });
    document.getElementById("list").innerHTML = tableData;

});


