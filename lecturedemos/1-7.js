
let employeeName = "Ezra";
let employeeJobTitle = "Teacher";
let employeePayRate = 19.99;

function DisplayEmployeeInfo(name, jobTitle, payRate){
    console.log(`The employee named ${name} works as a ${jobTitle} and makes ${payRate} per hour.`);
}


DisplayEmployeeInfo(employeeName, employeeJobTitle, employeePayRate);



let emp3 = {
    name: "Matt",
    jobTitle: "Instructor",
    payRate: 19.99
}

function displayEmployeeInfo2(employee){
    console.log(`The employee named ${employee.name} works as a ${employee.jobTitle} and makes ${employee.payRate} per hour.`);

}

displayEmployeeInfo2(emp3);