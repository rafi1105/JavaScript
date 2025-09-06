const student={
    name: "rafi",
    mark:90,
    1:50,
    "home-address": 'shawrapara',
}
//dot notation 
const studentName=student.name;
// console.log(student.1) throw error 
//solve it  {bracket notation}
const studentOne =student['1']
console.log(studentOne)
console.log(student["home-address"])

for (const key in student) {
    const value= student[key]
    console.log(key,value)
}