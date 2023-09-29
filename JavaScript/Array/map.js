var employee = [
    {
        name: "Rohit",
        salary: 12345.00
    },
    {
        name: "Rohit",
        salary: 12345.00
    },
    {
        name: "Rohit",
        salary: 12345.00
    }
]

// var updateEmployee = employee.map(function(ele, index){

//     let updatedSalary = employee.salary = employee.salary + (salary*10/100);
// })
// console.log(employee.salary)

let updatedSalary = employee.salary + (employee.salary * 10 / 100);
return { name: employee.name, salary: updatedSalary };

