class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    info() {
        console.log(`${this.name} is ${this.age} years old.`);
    }
}
class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }

    eat(){
        console.log(`${this.name} is eating`);
    }
    bark(){
        console.log('Woof Woof');
    }
}
const dog1 = new Dog('Buddy', 5, 'Golden Retriever');
dog1.eat();
dog1.bark();
dog1.info();
console.log(dog1);

class Cat extends Animal{
    constructor(name, age, color) {
        super(name, age);
        this.color = color;
    }
    meow() {
        console.log(`${this.name} says Meow!`);
    }
    sleep() {
        console.log(`${this.name} is sleeping.`);
    }
}

class Bird extends Animal{
    constructor(name, age, color){
        super(name, age);
        this.color = color;
    }
    fly(){
        console.log(`${this.name} is flying`);
    }
    sing(){
        console.log(`${this.name} is singing`);
    }
}