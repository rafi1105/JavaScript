class Vehicle {
    #carid;
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.#carid = Math.floor(Math.random() * 10000); // Private property
  }

  displayInfo() {
    console.log(`Vehicle: ${this.#carid}  ${this.brand} ${this.model} - Price: $${this.price}`);
  }
  getThis(){
    console.log(this)
  }
  getPrice(){
    return this.price;
  }
}   
const myCar = new Vehicle('Toyota', 'Corolla', 20000);
myCar.displayInfo(); // Vehicle: 1234 Toyota Corolla - Price: $20000
// console.log(myCar.#carid) // SyntaxError: Private field '#carid' must be declared in an enclosing class


