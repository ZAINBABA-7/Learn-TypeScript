import * as students from "./student";
// console.log("students", students)

const result1 = students.getAllStudents();
// console.log(result1);

const result2 = students.getOnsiteStudents();
// console.log(result2);

const result3 = students.entryTestPassedStudents();
// console.log(result3);

const result4 = students.getStudent(2003);
// console.log(result4);

const result5 = students.isOnsiteAllowedStudent(2007);
// console.log(result5);