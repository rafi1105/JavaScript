class Vehicle {
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

  displayInfo() {
    console.log(`Vehicle: ${this.brand} ${this.model} - Price: $${this.price}`);
  }
  getThis(){
    console.log(this)
  }
  getPrice(){
    return this.price;
  }
}   
const myCar = new Vehicle('Toyota', 'Corolla', 20000);
// myCar.getThis() // Vehicle { brand: 'Toyota', model: 'Corolla', price: 20000 }
// myCar.displayInfo(); // Vehicle: Toyota Corolla - Price: $20000
// console.log(myCar.getPrice()) // 20000

const student={
    name:"John",
    score:90,
    getThis: function(){
        console.log(this)
    },
    getArrow: ()=>{
        console.log(this)
    }
}
student.getThis() // { name: 'John', score: 90, getThis: [Function: getThis] }
student.getArrow() // In browser: Window {...}, In Node.js: {}
// function showThis() {
//   console.log(this);
// }   
// showThis() // In browser: Window {...}, In Node.js: global {...}