/*16. Use fs module. Use fs.writeFileSync() to save new JSON file. Store at least 2 student records. Verify file is created successfully*/


const fs = require("fs");

const students = [
    { id: 1, name: "Rishi", marks: 85 },
    { id: 2, name: "Amit", marks: 90 }
];

fs.writeFileSync("students.json", JSON.stringify(students, null, 2));

console.log("students.json file created successfully");