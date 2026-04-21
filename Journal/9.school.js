/*9. Create a JSON object for a school system with students, teachers, exams, and results.*/


const schoolSystem = {
    students: [
        { id: 1, name: "Rahul", class: "10th" },
        { id: 2, name: "Sneha", class: "9th" }
    ],
    teachers: [
        { id: 101, name: "Mr. Sharma", subject: "Maths" }
    ],
    exams: [
        { examId: 201, subject: "Maths", date: "2026-04-25" }
    ],
    results: [
        { studentId: 1, examId: 201, marks: 85 },
        { studentId: 2, examId: 201, marks: 90 }
    ]
};

console.log(schoolSystem);