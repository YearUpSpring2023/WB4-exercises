let emp1 = {
    employeeId: "1",
    name: "Ezra",
    jobTitle: "Theater Teacher",
    payRate: 38.46
};

let emp2 = {
    employeeId: "2",
    name: "Elisha",
    jobTitle: "Game Programmer",
    payRate: 43.27
};

let emp3 = {
    employeeId: "2",
    name: "Elisha",
    jobTitle: "Game Programmer",
    payRate: 43.27
};

console.log("The name of the first employee is " + emp1.name);
console.log("The name of the second employee is " + emp2.name);

console.log("The name of the first employee is " + emp1["name"]);
console.log("The name of the second employee is " + emp2["name"]);



