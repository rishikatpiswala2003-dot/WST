// Task 2: Read JSON using require()
const students = require("./students.json");

console.log("Student Names:");
students.forEach(student => {
    console.log(student.name);
});

// Task 3: Functions
function getAllStudents() {
    console.log("\nAll Students:");
    console.log(students);
}
function getStudentByName(name) {
    const student = students.find(s => s.name.toLowerCase() === name.toLowerCase());

    if (student) {
        console.log("\nStudent Found:");
        console.log(student);
    } else {
        console.log("\nStudent not found");
    }
}
function getAverageMarks() {
    let total = 0;

    students.forEach(student => {
        total += student.marks;
    });

    let avg = total / students.length;

    console.log("\nAverage Marks:", avg);
}
getAllStudents();
getStudentByName("Rishi");
getAverageMarks();


// Task 4: Convert Object to JSON
const newStudent = {
    name: "Karan",
    age: 24,
    course: "MCA",
    marks: 80
};

const jsonString = JSON.stringify(newStudent);

console.log("\nConverted JSON String:");
console.log(jsonString);


// Task 5: Write JSON File
const fs = require("fs");

const newData = [
    { name: "Priya", age: 22, course: "MCA", marks: 88 },
    { name: "Rahul", age: 23, course: "MCA", marks: 78 }
];

fs.writeFileSync("newStudents.json", JSON.stringify(newData, null, 2));

console.log("\nnewStudents.json file created successfully");


// Bonus Task: Read JSON async
fs.readFile("students.json", "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err.message);
        return;
    }

    const parsedData = JSON.parse(data);

    console.log("\nTotal number of students:", parsedData.length);
});