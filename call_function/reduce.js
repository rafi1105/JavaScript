const num=[1, 2, 3, 4, 5 ,10];

const reduceNum = num.reduce((x,y) => x + y,0);
console.log(reduceNum);

const students = [
    { name: 'Alice', age: 20, grade: 'A' },
    { name: 'Bob', age: 22, grade: 'B' },
    { name: 'Charlie', age: 23, grade: 'A' },
    { name: 'David', age: 21, grade: 'C' },
    { name: 'Eve', age: 20, grade: 'B' }
];

const totalAge = students.reduce((total, student) => total + student.age, 0);
console.log('Total age of students:', totalAge);

const gradeCount = students.reduce((count, student) => {
    count[student.grade] = (count[student.grade] || 0) + 1; //0 use korle undefined na asbe which is NaN, so 0 use kora hoyeche
    return count;
}, {});
console.log('Grade count:', gradeCount);

