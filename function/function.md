# JavaScript Functions - Complete Study Guide

A comprehensive guide covering all JavaScript function concepts with examples, problems, and solutions.

## 📚 Table of Contents

1. [Function Basics](#function-basics)
2. [Arrow Functions](#arrow-functions)
3. [Rest & Spread Operators](#rest--spread-operators)
4. [Higher-Order Functions](#higher-order-functions)
5. [Closures](#closures)
6. [Lexical Scoping](#lexical-scoping)
7. [IIFE (Immediately Invoked Function Expressions)](#iife)
8. [Hoisting](#hoisting)
9. [Pure vs Impure Functions](#pure-vs-impure-functions)
10. [Complex Problems & Solutions](#complex-problems--solutions)
11. [Practice Exercises](#practice-exercises)

---

## 🎯 Function Basics

### Function Declaration
```javascript
function greet(name) {
    return `Hello, ${name}!`;
}
```

### Function Expression
```javascript
const greet = function(name) {
    return `Hello, ${name}!`;
};
```

### Function with Return
```javascript
let calculate = function() {
    return c = (4 + 4); // Returns 8
}
console.log(calculate()); // Output: 8
```

---

## ➡️ Arrow Functions

### Basic Arrow Function
```javascript
let func = () => {
    console.log("Arrow function executed");
}
func(); // Output: Arrow function executed
```

### Arrow Function with Parameters
```javascript
const multiply = (a, b) => a * b;
console.log(multiply(5, 3)); // Output: 15
```

### Arrow Function vs Regular Function
```javascript
// Regular function
function regularFunc() {
    console.log(this); // 'this' refers to the calling object
}

// Arrow function
const arrowFunc = () => {
    console.log(this); // 'this' is lexically bound
}
```

---

## 📦 Rest & Spread Operators

### Rest Operator (...) - Function Parameters
Collects multiple arguments into an array.

```javascript
// Basic rest operator
function abcd(...val) {
    console.log(val); // [1, 2, 3, 4, 5, 6, 87, 9]
}
abcd(1, 2, 3, 4, 5, 6, 87, 9);

// Practical example - Calculate total scores
function getScore(...scores) {
    let total = 0;
    scores.forEach(function(val) {
        total += val;
    });
    console.log("Total scores is:", total);
}
getScore(12, 3, 14, 51, 21); // Output: Total scores is: 101
```

### Advanced Rest Operator Usage
```javascript
// Rest with other parameters
function processData(first, second, ...remaining) {
    console.log("First:", first);
    console.log("Second:", second);
    console.log("Remaining:", remaining);
}
processData(1, 2, 3, 4, 5, 6);
// Output:
// First: 1
// Second: 2
// Remaining: [3, 4, 5, 6]
```

### Spread Operator (...) - Arrays & Objects
Spreads elements of an array or object.

```javascript
// Array spreading
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// Object spreading
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObj = { ...obj1, ...obj2 }; // { a: 1, b: 2, c: 3, d: 4 }
```

---

## 🔄 Higher-Order Functions

Functions that either take other functions as arguments or return functions.

### First-Class Functions (Callback Functions)
```javascript
function add(val) { // Higher-order function
    val(); // Callback function is called here
}

add(function() {
    console.log("Callback function executed");
});
// Output: Callback function executed
```

### Functions Returning Functions
```javascript
function higher() {
    return function() { // Returns another function
        console.log("Higher-order function working");
    }
}

higher()(); // Output: Higher-order function working

// Alternative calling method
const innerFunc = higher();
innerFunc(); // Same output
```

### Practical Higher-Order Function Example
```javascript
function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    }
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // Output: 10
console.log(triple(4)); // Output: 12
```

---

## 🔒 Closures

A closure gives access to an outer function's scope from an inner function.

### Basic Closure
```javascript
function closure() {
    let clo = 23;
    return function() {
        console.log(clo); // Accesses parent scope variable
    }
}

const closureFunc = closure();
closureFunc(); // Output: 23
```

### Practical Closure Example - Counter
```javascript
function createCounter() {
    let count = 0;
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount());  // 2
console.log(counter.decrement()); // 1
```

### Private Variables with Closures
```javascript
function bankAccount(initialBalance) {
    let balance = initialBalance;
    
    return {
        deposit: function(amount) {
            balance += amount;
            return balance;
        },
        withdraw: function(amount) {
            if (amount <= balance) {
                balance -= amount;
                return balance;
            } else {
                return "Insufficient funds";
            }
        },
        getBalance: function() {
            return balance;
        }
    };
}

const account = bankAccount(100);
console.log(account.deposit(50));  // 150
console.log(account.withdraw(30)); // 120
console.log(account.getBalance()); // 120
// console.log(account.balance);   // undefined (private variable)
```

---

## 🎯 Lexical Scoping

Variables are accessible based on where they are defined in the code structure.

### Basic Lexical Scoping
```javascript
function lexical() {
    let a = 12; // Accessible only in lexical() and its nested functions
    
    function l1() {
        let b = 13; // Accessible only in l1() and its nested functions
        
        function l2() {
            let c = 14; // Accessible only in l2()
            let sum = a + b + c; // Can access a, b, and c
            console.log('Sum is:', sum);
            return sum;
        }
        return l2; // Return l2 function
    }
    return l1; // Return l1 function
}

// Method 1: Chain calling
lexical()()(); // Output: Sum is: 39

// Method 2: Step by step
const getL1 = lexical();
const getL2 = getL1();
const result = getL2(); // Output: Sum is: 39
```

### Complex Lexical Scoping Example
```javascript
function outerFunction(x) {
    function middleFunction(y) {
        function innerFunction(z) {
            console.log(`x: ${x}, y: ${y}, z: ${z}`);
            return x + y + z;
        }
        return innerFunction;
    }
    return middleFunction;
}

const result = outerFunction(10)(20)(30);
console.log(result); // Output: x: 10, y: 20, z: 30, then 60
```

---

## ⚡ IIFE (Immediately Invoked Function Expressions)

Functions that execute immediately after being defined.

### Basic IIFE
```javascript
(function() {
    console.log("IIFE executed immediately");
})();
// Output: IIFE executed immediately
```

### IIFE with Parameters
```javascript
(function(name, age) {
    console.log(`Name: ${name}, Age: ${age}`);
})("John", 25);
// Output: Name: John, Age: 25
```

### IIFE for Module Pattern
```javascript
const myModule = (function() {
    let privateVariable = 0;
    
    return {
        increment: function() {
            privateVariable++;
        },
        decrement: function() {
            privateVariable--;
        },
        getValue: function() {
            return privateVariable;
        }
    };
})();

myModule.increment();
myModule.increment();
console.log(myModule.getValue()); // 2
```

---

## 🏗️ Hoisting

JavaScript moves function declarations to the top of their scope.

### Function Declaration Hoisting
```javascript
// This works due to hoisting
host();

function host() {
    console.log("Hoisting works!"); // Output: Hoisting works!
}
```

### Function Expression Hoisting (Doesn't Work)
```javascript
// This throws an error
// hosting(); // TypeError: hosting is not a function

let hosting = function() {
    console.log("Hoisting error");
}
```

### Detailed Hoisting Example
```javascript
console.log(typeof myFunc); // "function"
console.log(typeof myVar);  // "undefined"

function myFunc() {
    return "I'm hoisted!";
}

var myVar = "I'm not fully hoisted!";

console.log(myFunc()); // "I'm hoisted!"
console.log(myVar);    // "I'm not fully hoisted!"
```

---

## 🔍 Pure vs Impure Functions

### Pure Functions
- Same input always produces same output
- No side effects
- Don't modify external state

```javascript
// Pure function
function add(a, b) {
    return a + b; // Only returns value, no side effects
}

function multiply(x, y) {
    return x * y; // Predictable, no external dependencies
}

console.log(add(2, 3)); // Always returns 5
console.log(multiply(4, 5)); // Always returns 20
```

### Impure Functions
- May produce different outputs for same input
- Have side effects
- Modify external state

```javascript
let counter = 0;

// Impure function - modifies external variable
function incrementCounter() {
    counter++; // Side effect: modifies external state
    return counter;
}

// Impure function - depends on external state
function getRandomMultiple(x) {
    return x * Math.random(); // Different output each time
}

console.log(incrementCounter()); // 1 (first call)
console.log(incrementCounter()); // 2 (second call)
```

### Converting Impure to Pure
```javascript
// Impure version
let total = 0;
function addToTotal(value) {
    total += value;
    return total;
}

// Pure version
function add(currentTotal, value) {
    return currentTotal + value;
}

// Usage
let total = 0;
total = add(total, 5); // total = 5
total = add(total, 3); // total = 8
```

---

## 🧩 Complex Problems & Solutions

### Problem 1: Function Composition
Create a function that composes multiple functions together.

```javascript
// Solution
function compose(...functions) {
    return function(value) {
        return functions.reduceRight((acc, fn) => fn(acc), value);
    };
}

// Usage
const addOne = x => x + 1;
const multiplyByTwo = x => x * 2;
const square = x => x * x;

const composedFunction = compose(square, multiplyByTwo, addOne);
console.log(composedFunction(3)); // ((3 + 1) * 2)² = (4 * 2)² = 8² = 64
```

### Problem 2: Memoization
Create a function that caches results for expensive operations.

```javascript
// Solution
function memoize(fn) {
    const cache = {};
    
    return function(...args) {
        const key = JSON.stringify(args);
        
        if (cache[key]) {
            console.log('Cache hit!');
            return cache[key];
        }
        
        console.log('Computing...');
        const result = fn.apply(this, args);
        cache[key] = result;
        return result;
    };
}

// Usage
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const memoizedFib = memoize(fibonacci);
console.log(memoizedFib(10)); // Computing... 55
console.log(memoizedFib(10)); // Cache hit! 55
```

### Problem 3: Partial Application
Create a function that allows partial application of arguments.

```javascript
// Solution
function partial(fn, ...partialArgs) {
    return function(...remainingArgs) {
        return fn(...partialArgs, ...remainingArgs);
    };
}

// Usage
function greetPerson(greeting, title, firstName, lastName) {
    return `${greeting}, ${title} ${firstName} ${lastName}!`;
}

const greetMr = partial(greetPerson, "Hello", "Mr.");
const greetDrSmith = partial(greetPerson, "Good morning", "Dr.", "Smith");

console.log(greetMr("John", "Doe")); // "Hello, Mr. John Doe!"
console.log(greetDrSmith("Jane"));   // "Good morning, Dr. Smith Jane!"
```

### Problem 4: Currying
Transform a function to accept arguments one at a time.

```javascript
// Solution
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function(...nextArgs) {
                return curried(...args, ...nextArgs);
            };
        }
    };
}

// Usage
function add(a, b, c) {
    return a + b + c;
}

const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
console.log(curriedAdd(1)(2, 3)); // 6
```

### Problem 5: Function Pipeline
Create a pipeline that processes data through multiple functions.

```javascript
// Solution
function pipeline(...functions) {
    return function(value) {
        return functions.reduce((acc, fn) => fn(acc), value);
    };
}

// Usage
const processNumber = pipeline(
    x => x + 1,           // Add 1
    x => x * 2,           // Multiply by 2
    x => Math.pow(x, 2),  // Square
    x => x - 10           // Subtract 10
);

console.log(processNumber(3)); // ((3 + 1) * 2)² - 10 = (4 * 2)² - 10 = 64 - 10 = 54
```

### Problem 6: Debounce Function
Create a function that delays execution until after a specified time.

```javascript
// Solution
function debounce(func, delay) {
    let timeoutId;
    
    return function(...args) {
        clearTimeout(timeoutId);
        
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Usage
function searchAPI(query) {
    console.log(`Searching for: ${query}`);
}

const debouncedSearch = debounce(searchAPI, 300);

// Only the last call will execute after 300ms
debouncedSearch("a");
debouncedSearch("ap");
debouncedSearch("app"); // Only this will execute
```

### Problem 7: Throttle Function
Limit function execution to once per specified time period.

```javascript
// Solution
function throttle(func, limit) {
    let inThrottle;
    
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Usage
function handleScroll() {
    console.log("Scroll event handled");
}

const throttledScroll = throttle(handleScroll, 100);

// Will execute at most once every 100ms
window.addEventListener('scroll', throttledScroll);
```

---

## 🎮 Practice Exercises

### Exercise 1: Function Factory
Create a function that generates specialized calculator functions.

```javascript
// Your solution here
function createCalculator(operation) {
    // Return appropriate function based on operation
}

// Should work like:
// const add = createCalculator('add');
// const multiply = createCalculator('multiply');
// console.log(add(5, 3)); // 8
// console.log(multiply(4, 2)); // 8
```

### Exercise 2: Advanced Closure
Create a function that manages a shopping cart.

```javascript
// Your solution here
function createShoppingCart() {
    // Implement cart functionality with closures
}

// Should work like:
// const cart = createShoppingCart();
// cart.addItem('apple', 2);
// cart.addItem('banana', 3);
// console.log(cart.getTotal()); // Returns total items
// console.log(cart.getItems()); // Returns all items
```

### Exercise 3: Function Chaining
Create a chainable calculator.

```javascript
// Your solution here
function Calculator(value) {
    // Implement chainable methods
}

// Should work like:
// Calculator(5).add(3).multiply(2).subtract(1).getValue(); // 15
```

---

## 🎯 Key Takeaways

### Function Best Practices
1. **Use descriptive names** for functions
2. **Keep functions small** and focused on one task
3. **Prefer pure functions** when possible
4. **Use arrow functions** for short, simple operations
5. **Leverage closures** for data privacy
6. **Use higher-order functions** for reusable logic

### Performance Considerations
- **Memoization** for expensive computations
- **Debouncing/Throttling** for event handlers
- **Function composition** for clean, reusable code
- **Avoid unnecessary closures** in loops

### Common Pitfalls
- **Hoisting confusion** with function expressions
- **this binding** differences in arrow functions
- **Memory leaks** with improperly managed closures
- **Overusing IIFE** when modules are available

---

## 📚 Additional Resources

- [MDN Functions Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [JavaScript.info Functions](https://javascript.info/function-basics)
- [Eloquent JavaScript - Functions](https://eloquentjavascript.net/03_functions.html)

---

**Happy Learning! 🚀**

Master these concepts through practice and experimentation!
