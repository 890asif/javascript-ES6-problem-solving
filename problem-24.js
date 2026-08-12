const employeeSalaryAnalyzer = (employees)=>{
    const findItdepartment = employees.filter(employee => employee.department ==="IT" )

    const addBonous = findItdepartment.filter(employee => employee.experience >= 3).map(employee => employee.salary * 1.20)

    const finalResult = addBonous.reduce((total, salary)=>{
        return total + salary * 1.05
    },0)

    return finalResult
}
const employees = [
  {
    name: "Asif",
    department: "IT",
    salary: 40000,
    experience: 3
  },
  {
    name: "Rafi",
    department: "HR",
    salary: 35000,
    experience: 5
  },
  {
    name: "Nadia",
    department: "IT",
    salary: 60000,
    experience: 6
  },
  {
    name: "Mitu",
    department: "IT",
    salary: 30000,
    experience: 2
  }
];

console.log(employeeSalaryAnalyzer(employees))