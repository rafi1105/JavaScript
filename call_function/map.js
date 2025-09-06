//callback function
const num = [1, 2, 3, 4, 5 ,10];

const mapNum = num.map((x) => x * 2);
console.log(mapNum);
const mapNum1 = num.map(function (x,index) {
  return x * index;
});
console.log(mapNum1)
// map vs foreach => map use return  but foreach have not return (undefined) 
// map use for new array but foreach can modify existing array
// foreach
const root=num.forEach(x=>{
    const sqrt=Math.round(Math.sqrt(x))
    console.log(sqrt) 
})


