function circleValues(rad){
    return `Perimeter: ${(2*Math.PI*rad).toFixed(2)}, Area: ${(Math.PI*rad*rad).toFixed(2)}`;
}
console.log(circleValues(10));
console.log(circleValues(30));
console.log(circleValues(50));
