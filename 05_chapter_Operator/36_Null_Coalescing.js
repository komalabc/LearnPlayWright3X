let amul = null;
let val = amul ?? "NANDANI Milk"; //condition is true, therefore it will return NANDANI Milk
console.log(val); //NANDANI Milk


let api_response = null;
let responsedata = api_response ?? "{}"; //condition is false so it will return the right side value
console.log(responsedata); // {}


let api_response1 = "PASS";
let responsedata1 = api_response1 ?? "{}"; //condition is true so it will return the left side value
console.log(responsedata1); // PASS