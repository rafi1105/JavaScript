const employee = {
    name: "rafi",
    designation: "QA",
    salary: 20000,
    experience: 1
}

Object.seal(employee) // it can be modify but not add new entries.. 
employee.salary = employee.salary+500
console.log(employee)

employee.age=22
console.log(employee)