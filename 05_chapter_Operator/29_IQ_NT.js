let statusCode = 404;
let category =
    statusCode < 300 ? "Success" :  //false
        statusCode < 400 ? "Redirect" : //false
            statusCode < 500 ? "Client Error" : "Server Error"; //true



console.log(`Status ${statusCode}: ${category}`); // Status 404: Client Error
console.log("Status :" + statusCode, category);// Status :404 Client Error