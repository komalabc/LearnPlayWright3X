let temp = 35;
let feel = (temp >= 40) ? "Very Hot" : //false
    (temp >= 30) ? "Hot" :   //true
        (temp >= 20) ? "Warm" : //not executed
            (temp >= 10) ? "Cool" : "Cold"; //not executed
console.log("7. Temperature:", temp, "| Feel:", feel);    // 7. Temperature: 35 | Feel: Hot