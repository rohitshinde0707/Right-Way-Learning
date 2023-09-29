var student = {
    firstName:"Jaggu",
    lastName:"yadav",
    age:29,
    Address:{
        homeNumber:"p-201",
        buildingName:"jaggu's Tower",
        landMark:"Near Jaggu's Famous Wadapav",
        city:"lapata",
        pincode:452123
        // we add some more properties
    },
    mail:"jaguuwadewale@gmail.com"
}
// crud operation with inner object's
// printing whole objects
console.log(student);
console.log("======================================================")

// updatedd in inner objects
// adding phone number in inner object
student.Address.phoneNumber = 8421795188n;
// adding more info in outsider object's
student.id = 71;
console.log(student)
console.log("======================================================")
// deleting some properties of inner objet's

delete student.Address.pincode;
// deleted pincode from inner object
console.log(student.Address);











