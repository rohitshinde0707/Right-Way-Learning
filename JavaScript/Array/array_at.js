const array = [5, 12, 8, 130, 44];
let index = 2;

console.log(`Using an Index of ${index} the  item returned is ${array.at(index)}`);

index = -2;
console.log(`Using an Index of ${index} the  item returned is ${array.at(index)}`);


console.log("================================================")
const cart = ["Apple", "Banana", "Pear"];

// a function which returns the last item of given array
function returnLast(arr){
    return arr.at(-1);
}
// get the last item of our array cart
const item1 = returnLast(cart);
console.log(item1);

// add an item to our cart array;

cart.push("Orange");
const item2 = returnLast(cart);
console.log(item2);
