// 1. greet(name)
function greet(name) {
    console.log("Hello " + name);
}
greet("Rishi");

// 2. add(a, b)
function add(a, b) {
    return a + b;
}
console.log("Addition:", add(10, 20));

// 3. isEven(num)
function isEven(num) {
    return num % 2 === 0;
}
console.log("Is Even (8):", isEven(8));
console.log("Is Even (7):", isEven(7));

// 4. square(n)
function square(n) {
    return n * n;
}
console.log("Square:", square(5));

// 5. calculateAverage(a, b, c)
function calculateAverage(a, b, c) {
    return (a + b + c) / 3;
}
console.log("Average:", calculateAverage(10, 20, 30));

// 6. printNumbers()
function printNumbers() {
    console.log("Numbers from 1 to 10:");
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
printNumbers();

// 7. findMax(a, b)
function findMax(a, b) {
    return a > b ? a : b;
}
console.log("Max:", findMax(15, 25));


// 8. Arrow function multiply(a, b)
const multiply = (a, b) => a * b;
console.log("Multiplication:", multiply(5, 4));


// SECTION 2: NPM (Chalk Example)

// (Run: npm install chalk first)

const chalk = require("chalk");

console.log(chalk.blue("This is blue text"));
console.log(chalk.green("This is green text"));
console.log(chalk.red("This is red text"));