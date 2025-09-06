const employee = {
    name: "rafi",
    designation: "QA",
    salary: 20000,
    experience: 1
}
// {
//     name: "kabir",
//     designation: "soft",
//     salary: 10000,
//     experience: 2
// }


for (const key in employee) {
    console.log(key) // give as values
} // object property  
//or 
const keys = Object.keys(employee) // give as array of object of the property
console.log(keys)
const values = Object.values(employee) // give as arry of the object of the property values
console.log(values)
const entries = Object.entries(employee)
console.log(entries) // 2D array all entries 

delete employee.experience // delete entries 
console.log(employee)

employee.salary = employee.salary+500
console.log(employee)

employee.age=22
console.log(employee)

Object.freeze(employee) // now the object can't be change 