// fat arrow function 
let fuc =  ()=> {
    console.log("first")
}
fuc();

// rest operator -> function parameter
// array or object -> spread operator
function abcd(...val){
    console.log(val)
}
abcd(1,2,3,4,5,6,87,9) 