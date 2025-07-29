// fat arrow function 
let fuc =  ()=> {
    console.log("first")
}
fuc();

// rest operator -> function parameter
function getScore(...scores){
    let total=0;
    scores.forEach(function(val){
        total += val ;
    })
    console.log("total scores is: ", total)
}
getScore(12,3,14,51,21)
// array or object -> spread operator
function abcd(...val){
    console.log(val)
}
abcd(1,2,3,4,5,6,87,9) 

// return 
let a = function(){
    return (
        c = (4+4)
    )
}
console.log(a());

//first-class function 

function add (val){ // higher order func.
    val(); // function of callback is called by here
}
add(function(){
    console.log("callback function")
})

//higher order function 
    function higher(){
        return function(){ // higher order func. 
            console.log("higher order working")
        }
    }

    higher()()

// pure vs impure functions
 /*
 if a function only print the value not changing anything so, it is pure
 if  a function change the value any operation then it is impure 
 */

 // closures ->a function  return a function and using parent func.  variable the it 
 function closure (){
    let clo = 23;
    return  function(){
        console.log(clo); // Fixed: should use 'clo' variable from parent scope
    }
 }

 // Call closure function
 const closureFunc = closure();
 closureFunc(); // This will print 23

 // lexical scoping
 function lexical(){
    let a=12; // access only 'a'
    function l1(){
        let b =13; // access only 'a' and 'b'
        function l2(){
            let c= 14; // access only 'a' , 'b' , 'c'
            let sum =  a+b+c;
            console.log('sum is: ' , sum)
            return sum; // return the sum
        }
        return l2; // return l2 function so it can be called
    }
    return l1; // return l1 function so it can be called
 }
// Method 2: Call in chain
lexical()()();            // lexical() returns l1, l1() returns l2, l2() executes

// IIFE (immediately invoked function expressions)

(function(){

})()

// hosting 
host()
function host(){
    console.log("hosting problem") // working
}
// but 
let hosting = function(){
    console.log("hosting error") // throw error
}

// # confusion
function checkAge(age){
    if (age<19) return"to young";
    return "allowd";
}
console.log(checkAge(29));