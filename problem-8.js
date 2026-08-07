const getManagerName = (employee)=>{
    if(!employee.manager){
        return undefined;
    }
    const {manager:{name}} = employee
    return name;
}
const employee = {
    name: "Asif", 
    manager:{
        name: "Tanvir"
    }
}
console.log(getManagerName(employee))


//other solution using optinal chaining

// const getManagerName = (employee)=>{
//     return employee.manager?.name
// }
// const employee = {
//     name: "Asif", 
//     manager:{
//         name: "Tanvir"
//     }
// }
// console.log(getManagerName(employee))