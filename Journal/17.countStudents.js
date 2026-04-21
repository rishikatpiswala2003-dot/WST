/*17. Use fs.readFile() (asynchronous) to read JSON file. Handle error properly in callback. Parse JSON string using JSON.parse(). Display total number of students.*/


const fs = require("fs");

fs.readFile("students.json", "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err.message);
        return;
    }

    const students = JSON.parse(data);
    console.log("Total number of students:", students.length);
});