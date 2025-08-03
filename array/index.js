let arr = [1,2,3];
arr[2]= 0;
arr.push(11);
let sr= arr.sort(function(a,b){
    return a - b // a-b accending  b-a descending order
})
// forEach
arr.forEach (function(val){
    console.log(val+5)
})
// map -> for create a new array form another exiting array 
// map have to use return it is fix otherwise it show 'undefined' 
let newArr = arr.map(function(val) {
    return (val > 10) ? val : 0;
});
console.log(newArr)

// filter
let filter=arr.filter(function(val){
    return (val> 4) ? true : false
})
console.log(filter)

// reduce
let reduce = arr.reduce(function(accumulator,val){
    console.log(val)
    return accumulator+val
},0) 
console.log("reduce", reduce)// accumulator -> starting values

// find 
let find = arr.find (function(val){
    return  val === 5 // show the first search elements 
})
console.log(find)

//some -> any element are greater than 10
let some= arr.some(function(val){
    return val>10;
})
console.log(some)

// every -> all element are greter than 5
let every= arr.some(function(val){
    return val>5;
})
console.log(every)

// copy array  using de-structuring
let [a,b, ,d]= arr;

// sprad oparetor 
let arr2 = arr // not copy it is refernce value 
let arr_2 = [...arr]; // copy properly as value 
