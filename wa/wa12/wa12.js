var employees =

{
    employees: [
        {
            "firstname": "Sam",
            "department": "Tech",
            "designation": "Manager",
            "salary": "40000",
            "raise_eligible": "true"
        },
        {
            "firstname": "Mary",
            "department": "Finance",
            "designation": "Trainee",
            "salary": "18500",
            "raise_eligible": "true"
        },
        {
            "firstname": "Bill",
            "department": "HR",
            "designation": "Executive",
            "salary": "21200",
            "raise_eligible": "false"
        },

    ]
}

var company =
{
    "company_name": "Tech Stars",
    "website": "www.techstars.site",
    "employees": [],
}

// problem 1
console.log('problem 1:')
console.log(JSON.stringify(company))

//problem 2
console.log('problem 2:')
company.employees = employees.employees
console.log(JSON.stringify(company))

//problem 3
console.log('problem 3:')
company.employees = company.employees.concat({
    "firstname": "Anna",
    "department": "Tech",
    "designation": "Executive",
    "salary": "25600",
    "raise_eligible": "false"
})
console.log(JSON.stringify(company))

//problem 4
console.log('problem 4:')
function totalsalary() {
    var tsalary = 0;
    for (e of company.employees) {
        tsalary = tsalary + Number(e.salary)
    }
    console.log("Total salary: " + tsalary)
}
totalsalary()

//problem 5
console.log('problem 5:')
function tenpercentraise() {
    for (e of company.employees) {
        e.salary = String(Number(e.salary) * 1.1)
        e.raise_eligible = false
    }
    console.log(JSON.stringify(company))
}
tenpercentraise()

//problem 6
console.log('problem 6:')
function workfromhome(homearray) {
    for (let i = 0; i < company.employees.length; i++) {
        let employee = company.employees[i];
        let workingFromHome = homearray.includes(employee.firstname) ? true : false;
        employee.working_from_home = workingFromHome;
    }
    console.log(JSON.stringify(company));
}
workfromhome(["Anna","Sam"])

