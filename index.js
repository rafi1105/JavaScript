
let prime = function(arr){
  let primeNO = [];
  
  for (let element of arr) {
    let isPrime = true;
    
    if (element < 2) {
      isPrime = false;
    } else {
        console.log(Math.round(Math.sqrt(element)))
      for (let i = 2; i <= Math.sqrt(element); i++) {
        if (element % i === 0) {
          isPrime = false;
          break;
        }
      }
    }
    
    if (isPrime) {
      primeNO.push(element);
    }
  }
  
  return primeNO;
}
console.log(prime([5,2,10,14,11,15]))