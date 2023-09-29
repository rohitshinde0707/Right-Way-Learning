var  student = {
    name:"tanaya",
    id:7,
    city:"A.Nagar"
}
// there are 2 operators to access object peroperties
// 1] . (dot  operator)
//  2] [] (square bracket operator)

console.log(student.city);
console.log(student["city"]);

// array, function's and Object's are all type's of Object's
var array = [];
var obj = {}
function myFunction(){

}

console.log("=============================")
console.log(typeof array)
console.log(typeof obj)
console.log(typeof myFunction)


console.log("=================")

// Use dot notation when you know the property name beforehand and it's a fixed string.
// Use square bracket notation when the property name is dynamic,
// determined at runtime, or you need to access properties with special characters or spaces in their names.
var Myobj = {
    name:"sham",
    id:8,
    dob:"01/01/1990"
}
console.log(Myobj.name);

var secObj = {
    name:"sundar",
    id:9,
    city:"pune"
}
console.log(secObj['name'])

var propertyName = "name";
console.log(secObj[propertyName]);
var keys = Object.keys(secObj);
console.log(keys)
var values = Object.values(secObj);
console.log(values);
console.log("=====================================")
const o = {
    get gimmeFive(){
        return 5;
    },
};
console.log(o.gimmeFive);













