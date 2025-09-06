/*
class is template for creating objects
properties and methods are defined inside a class
method is  special function inside a class without the function keyword
To access properties and methods of a class we use the dot operator
*/
class Player{
    constructor(name,age,team){ //special method
        console.log("constructor called");
        this.name = name;
        this.age = age;
        this.team = team;
        this.location = 'BD';
    }
    goal(){ //method
        console.log('Goal!!!');
    }
    getTeam(){
        return 'Team A';
    }
}

const player1 = new Player('John Doe', 25, 'Team A'); // call the constructor
// console.log(player1.getTeam());
console.log(player1);