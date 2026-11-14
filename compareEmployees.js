
const employee1 = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    companies: ["Google", "Facebook", "Amazon"],
};

const employee2 = {
    firstName: "Mike",
    lastName: "Smith",
    age: 35,
    companies: ["Nvidia", "Apple", "Rona", "Tesla"]
};



function compareEmployees(employee1, employee2) {
    if (employee1.companies.length > employee2.companies.length) {
        console.log(employee1.firstName + " " + employee1.lastName + " has worked at more companies:");
        for (let i = 0; i < employee1.companies.length; i++) {
            console.log(employee1.companies[i]);
        }
    } 
    
    else if (employee1.companies.length < employee2.companies.length) {
        console.log(employee2.firstName + " " + employee2.lastName + " has worked at more companies:");
        for (let i = 0; i < employee2.companies.length; i++) {
            console.log(employee2.companies[i]);
        }
    } 
    
    else {
        console.log(employee1.firstName + " " + employee1.lastName + " and " + employee2.firstName + " " + employee2.lastName + " have worked at the same number of companies.");
        for (let i = 0; i < employee1.companies.length; i++) {
            console.log(employee1.companies[i]);
        }
        for (let i = 0; i < employee2.companies.length; i++) {
            console.log(employee2.companies[i]);
        }
    }
}

compareEmployees(employee1, employee2);

