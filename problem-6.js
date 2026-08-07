 const promoteEmployee = (employee, newTitle)=>{
return {
    ...employee,
    title: "Senior Dev"

};
 };
 const employee = {
    name:"Rafi",
    title:"Junior Dev"
 }

 console.log(promoteEmployee(employee, "Senior Dev"))
 console.log(employee)