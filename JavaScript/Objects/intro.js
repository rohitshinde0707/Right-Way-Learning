var person = {
    firstName: "Tanaya",
    lastName: "Tiwatane",
    age: 23
}

var person2 = {
    firstName:"Rohit",
    lastName:"Shinde",
    age:23
}

// reading object before update
console.log("printing object")
console.log(person);
console.log(person2);
// adding properties to objects
console.log("object after updating col name")
person.colleageName = "AS";
person2.colleageName = "MMC, Pune";

console.log(person2);
console.log(person);

// deleting some properties from objects
delete person.colleageName;
delete person2.colleageName;

console.log("object after deleted some properties")
console.log(person2);
console.log(person);
