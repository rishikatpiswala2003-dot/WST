/*13. Create a file user.json. Add at least 3 users with name, age, and skills. Read JSON file in Node.js using require(). Print user details using console.log(). Convert JS object to JSON string using JSON.stringify()*/

const users = require("./user.json");

console.log("User Details:");
console.log(users);

const jsonString = JSON.stringify(users);
console.log("JSON String:");
console.log(jsonString);