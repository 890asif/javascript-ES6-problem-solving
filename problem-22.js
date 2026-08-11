const studentResultAnalyze = (students)=>{
    
   const result = students.map(student => {
      const total = student.marks.reduce((sum,marks)=>{
        return sum + marks
       
    },0)
     const avg = total / student.marks.length
     return{
        name: student.name,
        total: total,
        avg: avg
     };
});
const finalResult = result.filter(student => student.avg >= 70).map(student => student.name)


   return finalResult;
}
const students = [
  {
    name: "Asif",
    marks: [80, 75, 90]
  },
  {
    name: "Rafi",
    marks: [60, 55, 70]
  },
  {
    name: "Nadia",
    marks: [95, 90, 92]
  },
  {
    name: "Mitu",
    marks: [30, 40, 35]
  }
];
console.log(studentResultAnalyze(students));