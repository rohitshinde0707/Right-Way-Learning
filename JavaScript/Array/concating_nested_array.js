const num1 = [[1]];
const num2 = [2, [3]];

const numbers = num1.concat(num2);

console.log(numbers);

num1[0].push(4);
console.log(numbers);
num2[1].push(4);
console.log(num2);

