function calFahrenheit(cel){
    return (cel*9/5)+32
}
console.log(calFahrenheit(0));
console.log(calFahrenheit(45));
console.log(calFahrenheit(25));
console.log("===============================================")

function toCelsius(F){
    return (5/9) * (F-32)
};

let values = toCelsius(78).toFixed(3);
let text = "The Temperature is " + values + " cel";
console.log(text)
console.log(values)