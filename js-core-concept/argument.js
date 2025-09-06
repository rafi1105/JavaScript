function add(a, b) {
    console.log(arguments); // Logs all arguments passed
    const params= [...arguments];
    console.log(params.map((arg) => arg * 2)); // Converts arguments to an array

    return a + b;
}   
const sum = add(5, 10, 15, 20); // Extra arguments are ignored
console.log(`Sum: ${sum}`);