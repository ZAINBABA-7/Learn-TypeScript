import students from "./data";

/* 1 */ export const getAllStudents = ()=>{
    return students;
}

/* 2 */ export const getOnsiteStudents = ()=>{
    const result = students.filter((student)=>student.isOnsiteAllowed);
    return result;
}

/* 3 */ export const entryTestPassedStudents = ()=>{
    const result = students.filter((student)=>student.entryTest.isPassed);
    return result;
}

/* 4 */ export const getStudent = (RollNo:number)=>{
    const result = students.find((student)=>student.rollNo === RollNo);
    return result;
}

/* 5 */ export const isOnsiteAllowedStudent = (RollNo:number)=>{
    const result = students.find((student)=>student.rollNo === RollNo && student.isOnsiteAllowed);
    if(result){
        return true
    } else {
        return false
    }
}