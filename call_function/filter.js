const students = [
  { name: 'Alice', age: 20, grade: 'A' },
  { name: 'Bob', age: 22, grade: 'B' },
    { name: 'Charlie', age: 23, grade: 'A' },
    { name: 'David', age: 21, grade: 'C' },
    { name: 'Eve', age: 20, grade: 'B' }
];

// Filter students with grade 'A'
const gradeAStudents = students.filter(student => student.grade === 'A');
console.log('Students with grade A:', gradeAStudents);
// Filter students older than 21
const olderStudents = students.filter(student => student.age > 21);
console.log('Students older than 21:', olderStudents);
// Filter students whose names start with 'D'
const dStudents = students.filter(student => student.name.startsWith('D'));
console.log("Students whose names start with 'D':", dStudents);
// Filter students with grade 'A'
const specificGradeStudents = (grade) => {
    return students.filter(student => student.grade === grade);
};
console.log('Students with grade A:', specificGradeStudents('A'));

const name3length = students.filter(student => student.name.length === 3);
console.log('Students with name length 3:', name3length);