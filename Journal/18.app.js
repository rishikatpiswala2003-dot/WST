/*18. Create function getAllStudents() to print all records. Create function getStudentByName(name) to find student. Create function getAverage Marks() to calculate average marks. Call all functions from app.js.*/


const studentModule = require("./students");

studentModule.getAllStudents();
studentModule.getStudentByName("Rishi");
studentModule.getAverageMarks();