// Task 1: Read JSON using require()
const users = require("./user.json");

console.log("User Details:");
console.log(users);

// Convert JS object to JSON string
const jsonString = JSON.stringify(users);
console.log("\nJSON String:");
console.log(jsonString);

// Task 4: Custom Module
const math = require("./math");

console.log("\nMath Module:");
console.log("Add:", math.add(10, 5));
console.log("Subtract:", math.subtract(10, 5));
console.log("Multiply:", math.multiply(10, 5));

// Task 5: Calculator Module
const calc = require("./calculator");

let a = 20;
let b = 10;

console.log("\nCalculator Module:");
console.log("Addition:", calc.add(a, b));
console.log("Subtraction:", calc.sub(a, b));
console.log("Multiplication:", calc.mul(a, b));
console.log("Division:", calc.div(a, b));

// Task 3: NPM Chalk
// (Run npm install chalk first)
const chalk = require("chalk");

console.log(chalk.green("\nChalk Working: Green Text"));
console.log(chalk.blue("Blue Text"));
console.log(chalk.red("Red Text"));

// BONUS TASK: Async read JSON
const fs = require("fs");

fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
        console.error("Error:", err.message);
        return;
    }

    const products = JSON.parse(data);

    console.log("\nProduct Names:");
    products.forEach(p => {
        console.log(p.productName);
    });
});