let role= "admin"
let obj ={
    name: "rafi",
    age: 45,
    food: {
        morning: "singara",
        lunch : {
            outdoor: "teheri",
            home: "khicuri"
        },

    },
[role]: "rafi"
};
let aa= "name"
// obj.aa -> show error
obj.name // . search actual value 
obj[aa] // search the value of the variable 

// access outdoor (deep access)
console.log(obj.food.lunch.outdoor)

// destructuring 
let {lunch,morning} = obj.food // variable now 2 
console.log(lunch)

// loop 
for (let key in obj){
    console.log(key) // show the key name only
    console.log(key, ":" ,obj[key])
}

// 
Object.keys(obj) // show key as array 
Object.entries(obj) // show as array of array 

// copy 
let obj3 = Object.assign({price: Infinity},obj);

// deep clone -> if it is nested obj
let obj2= {...obj}; // shallow copy 
// obj2.food.morning= "samusa" // it change also the main content obj morning value also because of reference pass
// so use deep clone-> 

// Convert object to JSON string
let jsonString = JSON.stringify(obj); // object convert to 'string' 
console.log("JSON String:", jsonString);

// Convert JSON string back to object (deep clone)
let deepClone = JSON.parse(jsonString); // string to object 

// Now test the deep clone
console.log("Original obj:", obj.food.morning);
deepClone.food.morning = "samusa";
console.log("After changing deepClone:", obj.food.morning); // Should remain unchanged
console.log("Deep clone value:", deepClone.food.morning);

// Alternative: One-liner deep clone
let deepClone2 = JSON.parse(JSON.stringify(obj));
deepClone2.food.morning = "samusa";
console.log("Deep clone 2:", deepClone2);
console.log(obj)

// opional 
obj?.food?.morning // it can be exit or it can't be exit 

