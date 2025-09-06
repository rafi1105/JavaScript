let data =4
console.log( `num typeof data: ${typeof data}`); 
data = "hello"
console.log(`string typeof data: ${typeof data}`); 
data = true
console.log(`boolean typeof data: ${typeof data}`);
data = null
console.log(`null typeof data: ${typeof data}`);
data = undefined
console.log(`undefined typeof data: ${typeof data}`);
data = {name:"John", age:30}
console.log(`object typeof data: ${typeof data}`);
data = [1, 2, 3]
console.log(`array typeof data: ${typeof data}`);
console.log(`array isArray: ${Array.isArray(data)}`);
data = function() { return "Hello"; }
console.log(`function typeof data: ${typeof data}`);
data = Symbol("id")
console.log(`symbol typeof data: ${typeof data}`);

console.log({} == {});
console.log([5] == [5]);