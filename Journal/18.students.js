const students = [
    { name: "Rishi", marks: [80, 90, 85] },
    { name: "Amit", marks: [70, 75, 80] },
    { name: "Sneha", marks: [95, 85, 90] }
];

function getAllStudents() {
    console.log("All Students:");
    console.log(students);
}

function getStudentByName(name) {
    const student = students.find(s => s.name.toLowerCase() === name.toLowerCase());
    if (student) {
        console.log("Student Found:", student);
    } else {
        console.log("Student not found");
    }
}

function getAverageMarks() {
    console.log("Average Marks:");
    students.forEach(student => {
        const sum = student.marks.reduce((a, b) => a + b, 0);
        const avg = sum / student.marks.length;
        console.log(student.name + ":", avg);
    });
}

module.exports = { getAllStudents, getStudentByName, getAverageMarks };