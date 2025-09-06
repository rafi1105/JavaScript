const numbers= [3,1,4,34,11,6]
for(const num of numbers){ // show value of the index 
    console.log(`value: ${num}`)
}
for(const num in numbers){ // show  the index  of the values
    console.log(`index: ${num}`)
}

const employee = {
    name: "rafi",
    designation: "QA",
    salary: 20000,
    experience: 1
}

for (const key in employee) {
    const value=employee[key]
    console.log(key,value)
}