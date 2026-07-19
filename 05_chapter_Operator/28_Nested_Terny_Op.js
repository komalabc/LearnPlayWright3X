// Multiple Condition

let age = 26;
//   age > 18 -> she will goa, else not else
// drink > 25  yes, else no 

let is_kbc_enjoy = age > 18 ? (age > 26 ? "Drink" : "No") : false;
console.log(`Can kbc Drink? : ${is_kbc_enjoy}`);