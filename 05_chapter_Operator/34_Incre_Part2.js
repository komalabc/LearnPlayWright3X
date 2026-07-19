let a = 10;
console.log(++a + a + a++); //11+11+11
console.log(a); //33

let i = 1;
let result = i++ + ++i; //1+3
console.log(result, i); //4 3


let a = 10;
console.log(++a + ++a); //11+12
console.log(a); //23

let a = 34;
let result = a++;
console.log(result); //34
console.log(a); //35