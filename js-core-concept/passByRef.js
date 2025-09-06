// Pass by Reference Example (Primitive Data Types)
function multiply(x,y){
    x+=5;
    y+=5
    const mult = x*y
    return mult
}
const a=6
const b=6
console.log(`Before function call a: ${a}, b: ${b}`);
const result = multiply(a,b)
console.log(`After function call a: ${a}, b: ${b}`);
console.log(result)

// Pass by Reference Example (Non-Primitive Data Types)
function updateUser(user){
    user.name = "Jane";
    user.age = 25;
}
const user = {name: "John", age: 30};
console.log("Before function call:", user);
updateUser(user);
console.log("After function call:", user);

